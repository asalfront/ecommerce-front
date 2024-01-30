import CategoriesMain from '@/features/categories/presentation/pages/home/categories.main';
import CustomersMain from '@/features/customers/presentation/pages/home/customers.main';
import HomePage from '@/features/dashboard/presentation/pages/home/home.page';
import OrdersMain from '@/features/orders/presentation/pages/home/orders.main';
import ProductsMain from '@/features/products/presentation/pages/home/products.main';
import ProfileMain from '@/features/profile/presentation/pages/profile/profile.main';
import UsersMain from '@/features/users/presentation/pages/home/users.main';
import { Navigate, RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/main/main.layout';

import { PrivateRoutes } from './models/routes';

export const privateRoutes: RouteObject = {
	path: PrivateRoutes.PRIVATE,
	element: <MainLayout />,
	children: [
		{
			index: true,
			element: <Navigate to={PrivateRoutes.DASHBOARD} />
		},
		{
			path: PrivateRoutes.DASHBOARD,
			element: <HomePage />
		},
		{
			path: PrivateRoutes.CUSTOMERS,
			element: <CustomersMain />
		},
		{
			path: PrivateRoutes.PRODUCTS,
			element: <ProductsMain />
		},
		{
			path: PrivateRoutes.CATEGORIES,
			element: <CategoriesMain />
		},
		{
			path: PrivateRoutes.USERS,
			element: <UsersMain />
		},
		{
			path: PrivateRoutes.ORDERS,
			element: <OrdersMain />
		},
		{
			path: PrivateRoutes.PROFILE,
			element: <ProfileMain />
		}
	]
};
