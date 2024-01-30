import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { AppResponse } from '@/core/domain/entities/response/app.response';
import { formSchema } from './validations';
import { RecoverPasswordForm } from '@/features/auth/domain/entities/recover-password.form';
import { RecoverPasswordUseCase } from '@/features/auth/domain/usecases/recover-password.usecase';
import { di, useLoading, useUI } from '@/core/hooks';

const useRecoverPassword = () => {
	const { snackBarUI } = useUI();
	const navigate = useNavigate();
	const { control, handleSubmit, reset } = useForm<RecoverPasswordForm>({
		resolver: yupResolver(formSchema),
		mode: 'onChange',
	});

	const recoverPasswordUseCase = di().resolve(RecoverPasswordUseCase);
	const recoverPasswordMutation = useMutation((form: RecoverPasswordForm) => recoverPasswordUseCase.invoke(form));

	const onSend = (form: RecoverPasswordForm) => {
		recoverPasswordMutation.mutate(form, {
			onSuccess: (response: AppResponse) => {
				reset(form);
				snackBarUI.current?.open({
					message: response.data.message,
					type: response.type,
				});
			},
		});
	};

	const onCancel = () => {
		navigate('/auth/login');
	};

	useLoading([recoverPasswordMutation.isLoading]);

	return {
		onSend,
		onCancel,
		control,
		handleSubmit,
	};
};

export default useRecoverPassword;
