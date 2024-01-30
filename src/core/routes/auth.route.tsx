import { Navigate, RouteObject } from 'react-router-dom';

import AuthLayout from '../layouts/auth/auth.layout';
import { PublicRoutes } from './models/routes';

import LoginMain from '@/features/auth/presentation/pages/login/login.main';
import RecoverPasswordPage from '@/features/auth/presentation/pages/recover-password/recover-password.page';
import ResetPasswordPage from '@/features/auth/presentation/pages/reset-password/reset-password.page';

export const authRoutes: RouteObject =
	{
		path: PublicRoutes.AUTH,
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Navigate to={PublicRoutes.LOGIN} />
			},
			{
				path: PublicRoutes.LOGIN,
				element: <LoginMain />
			},
			{
				path: PublicRoutes.RESET,
				element: <ResetPasswordPage />
			},
			{
				path: PublicRoutes.RECOVER,
				element: <RecoverPasswordPage />
			}
		]
	};

