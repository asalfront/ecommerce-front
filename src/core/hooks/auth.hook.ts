import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/core/redux/store';
import { AuthDataSource } from '@/features/auth/data/datasources/auth.datasource';
import { AuthRepositoryImpl } from '@/features/auth/data/repositories/auth.repository-impl';
import { LoginUseCase } from '@/features/auth/domain/usecases/login.usecase';
import { login, logout } from '@/core/redux/slices/auth.slice';
import { Credentials } from '@/features/auth/domain/entities/credentials';
import { Authenticated } from '@/features/auth/domain/entities/authenticated';

export const useAuth = () => {
	const dispatch = useDispatch();
	const authenticated = useSelector((state: RootState) => state.auth);

	const loginUseCase = new LoginUseCase(
		new AuthRepositoryImpl(new AuthDataSource()),
	);

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	const isAuthenticatedEntity = (obj: any): obj is Authenticated => {
		return 'id' in obj && 'email' in obj;
	};

	const onLogin = async (_credentials: Credentials) => {
		const user = await loginUseCase.invoke(_credentials);
		if (user && isAuthenticatedEntity(user)) {
			dispatch(login(user));
		}
	};

	const onLogout = () => {
		dispatch(logout());
	};

	return {
		onLogin,
		onLogout,
		authenticated
	};
};
