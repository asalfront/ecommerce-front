import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import { appContentStyles, Main } from './main.styles';
import { AppBarWidget, SidebarWidget } from './widgets';
import { useAuth } from '@/core/hooks';

const MainLayout = () => {
	const [openDrawer, setOpenDrawer] = useState(true);
	const { authenticated } = useAuth();
	const navigate = useNavigate();

	const handleDrawerClose = () => {
		setOpenDrawer(false);
	};

	const handleDrawerToggle = () => {
		setOpenDrawer(!openDrawer);
	};

	useEffect(() => {
		if (authenticated.token === '') {
			navigate('/');
		}
	}, [authenticated]);

	return (
		<>
			<Box sx={appContentStyles}>
				<CssBaseline />
				<AppBarWidget open={openDrawer} handleDrawerToggle={handleDrawerToggle} />
				<SidebarWidget open={openDrawer} handleDrawerClose={handleDrawerClose} />
				<Main open={openDrawer}>
					<Outlet />
				</Main>
			</Box>
		</>
	);
};

export default MainLayout;
