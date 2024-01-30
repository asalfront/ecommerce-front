import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { login, logout } from '@/core/redux/slices/auth.slice';
import { di, useLoading } from '@/core/hooks';
import { formSchema } from './validations';
import { Authenticated, LoginForm } from '@/features/auth/domain/entities';
import { LoginUseCase } from '@/features/auth/domain/usecases/login.usecase';
import { useSnackbar } from '@/core/hooks/snackbar.hook';

const useFormLogin = () => {
	const { showError } = useSnackbar();
	const { handleSubmit, control } = useForm<LoginForm>({
		resolver: yupResolver(formSchema),
		mode: 'onChange',
	});
	const dispatchRedux = useDispatch();

	const loginUseCase = di().resolve(LoginUseCase);
	const loginMutation = useMutation((form: LoginForm) => loginUseCase.invoke(form));
	
	const { closeLoading } = useLoading([loginMutation.isLoading]);

	const onLogin = (form : LoginForm) => {
		loginMutation.mutate(form, {
			onSuccess: (r) => {
				closeLoading();
				if (r.type === 'error') {
					showError(r);
					return;
				}
				const authenticated = r.data as unknown as Authenticated;
				dispatchRedux(login(authenticated));
			},
		});
	};

	const onLogout = () => {
		dispatchRedux(logout());
	};


	return {
		handleSubmit,
		control,
		onLogin,
		onLogout,
	};
};

export default useFormLogin;
