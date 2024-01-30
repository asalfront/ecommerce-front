import { FC } from 'react';
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, Stack, Toolbar } from '@mui/material';

import { sideBarRoutes } from '@/core/routes/models/routes';
import { SidebarItemCollapseWidget, SidebarItemWidget } from '..';
import { drawerContainerStyles, drawerStyles, sidebarItemStyles } from './sidebar.styles';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '@/core/theme/theme';
import { AccountCircle } from '@mui/icons-material';

interface Props {
	open: boolean;
	handleDrawerClose: () => void;
}

export const SidebarWidget: FC<Props> = (props) => {
	const { open } = props;

	const location = useLocation();
	const profileActive = location.pathname === '/profile';

	return (
		<Drawer
			sx={drawerStyles}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<Box sx={drawerContainerStyles}>
				<List disablePadding>
					<Toolbar sx={{ marginBottom: '20px' }}>
						<Stack
							sx={{ width: '100%' }}
							direction="row"
							justifyContent="center"
						>
						</Stack>
					</Toolbar>
					{sideBarRoutes.map((route, index) => (
						route.sidebarProps ? (
							route.children ? (
								<SidebarItemCollapseWidget item={route} key={index} />
							) : (
								<SidebarItemWidget item={route} key={index} />
							)
						) : null
					))}
				</List>
				<Box>
					<Divider />
					<ListItemButton
						component={Link}
						to='/private/profile'
						sx={{
							...sidebarItemStyles,
							backgroundColor: profileActive ? theme.palette.primary.main : 'transparent',
						}}
					>
						<ListItemIcon sx={{
							color: theme.palette.common.white,
						}}>
							<AccountCircle />
						</ListItemIcon>
					Profile
					</ListItemButton>
					<Box sx={{ height: '16px' }} />
				</Box>
			</Box>
		</Drawer>
	);
};
