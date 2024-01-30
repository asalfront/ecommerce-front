import { createBrowserRouter, Navigate } from 'react-router-dom';

import { PublicRoutes } from './models/routes';
import { privateRoutes } from './private.route';
import { authRoutes } from './auth.route';

export const appRouter = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <Navigate to={PublicRoutes.AUTH} />
			},
			authRoutes,
			privateRoutes,
		]
	}
]);
