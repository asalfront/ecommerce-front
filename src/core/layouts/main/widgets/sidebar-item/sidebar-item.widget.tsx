import { ListItemButton, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { RouteType } from '@/core/routes/models/route';
import { sidebarItemStyles } from './sidebar-item.styles';
import { theme } from '@/core/theme/theme';

type Props = {
  item: RouteType;
};

export const SidebarItemWidget = ({ item }: Props) => {
	const location = useLocation();
	const matchLocations = location.pathname === item.path;
	
	return (
		item.sidebarProps && item.path ? (
			<ListItemButton
				component={Link}
				to={item.path}
				sx={{
					...sidebarItemStyles,
					backgroundColor: matchLocations ? theme.palette.primary.main : 'transparent',

				}}
			>
				<ListItemIcon sx={{
					color: theme.palette.common.white,
				}}>
					{item.sidebarProps.icon && item.sidebarProps.icon}
				</ListItemIcon>
				{item.sidebarProps.label}
			</ListItemButton>
		) : null
	);
};

