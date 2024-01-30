import { RouteType } from './route';
import { Category, Dashboard, Inventory, People }  from '@mui/icons-material';

export const PublicRoutes = {
	AUTH: 'auth',
	LOGIN: 'login',
	RESET: 'reset-password',
	RECOVER: 'recover-password',
};
export const PrivateRoutes = {
	PRIVATE: 'private',
	DASHBOARD: 'dashboard',
	CUSTOMERS: 'customers',
	PRODUCTS: 'products',
	CATEGORIES: 'categories',
	PROFILE: 'profile',
	ORDERS: 'orders',
	USERS: 'users',
};

export const sideBarRoutes: RouteType[] = [
	{
		path: `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`,
		state: PrivateRoutes.DASHBOARD,
		sidebarProps: {
			label: 'Dashboard',
			icon: <Dashboard />,
		},
	},
	{
		path: `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CUSTOMERS}`,
		state: PrivateRoutes.CUSTOMERS,
		sidebarProps: {
			label: 'Customers',
			icon: <People />,
		},
	},
	{
		path: PrivateRoutes.PRODUCTS,
		state: PrivateRoutes.PRODUCTS,
		sidebarProps: {
			label: 'Products',
			icon: <Inventory />,
		},
	},
	{
		path: PrivateRoutes.CATEGORIES,
		state: PrivateRoutes.CATEGORIES,
		sidebarProps: {
			label: 'Categories',
			icon: <Category />,
		},
	},
	{
		path: PrivateRoutes.ORDERS,
		state: PrivateRoutes.ORDERS,
		sidebarProps: {
			label: 'Orders',
			icon: <Category />,
		},
	},
	{
		path: PrivateRoutes.USERS,
		state: PrivateRoutes.USERS,
		sidebarProps: {
			label: 'Users',
			icon: <People />,
		},
	}
];
