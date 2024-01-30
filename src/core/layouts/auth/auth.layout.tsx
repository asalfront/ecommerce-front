import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Grid } from '@mui/material';

import BackgroundWidget from './widgets/background/background.widget';
import { authStyles, containerStyles } from './auth.styles';
import { useAuth } from '@/core/hooks';

const AuthLayout = () => {
	const { authenticated } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (authenticated.token !== '') {
			navigate('/private');
		}
	}, [authenticated]);

	return (
		<>
			<CssBaseline />
			<Container maxWidth={false} disableGutters={true} sx={containerStyles}>
				<Grid container direction="row" spacing={2} sx={containerStyles}>
					<Grid item xs={6}>
						<BackgroundWidget />
					</Grid>
					<Grid
						item xs={6}
						sx={authStyles.flex}
					>
						<Box sx={authStyles.login}>
							<Outlet />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default AuthLayout;
