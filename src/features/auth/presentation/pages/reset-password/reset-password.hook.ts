import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResetPasswordUseCase } from '@/features/auth/domain/usecases/reset-password.usecase';
import { ResetPasswordForm } from '@/features/auth/domain/entities';
import { formSchema } from './validations';
import { AppResponse } from '@/core/domain/entities/response/app.response';
import { di, useLoading, useUI } from '@/core/hooks';

const useResetPassword = () => {
	const { snackBarUI } = useUI();
	const navigate = useNavigate();
	const [passwordChanged, setPasswordChanged] = useState(false);
	const { control, handleSubmit } = useForm<ResetPasswordForm>({
		resolver: yupResolver(formSchema),
		mode: 'onChange',
	});
	const [searchParams] = useSearchParams();

	const resetPasswordUseCase = di().resolve(ResetPasswordUseCase);
	const resetPasswordMutation = useMutation((form: ResetPasswordForm) => resetPasswordUseCase.invoke(form));

	const onResetPassword = (form: ResetPasswordForm) => {
		if (searchParams.get('token')) {
			form.token = searchParams.get('token') ?? '';
		}

		resetPasswordMutation.mutate(form, {
			onSuccess: (response: AppResponse) => {
				if (response.type === 'success') {
					setPasswordChanged(true);
				}
				snackBarUI.current?.open({
					message: response.data.message,
					type: response.type,
				});
			},
		});
	};

	const onGoToLogin = () => {
		navigate('/auth/login');
	};

	useLoading([resetPasswordMutation.isLoading]);

	return {
		onResetPassword,
		control,
		handleSubmit,
		passwordChanged,
		onGoToLogin,
	};

};

export default useResetPassword;
