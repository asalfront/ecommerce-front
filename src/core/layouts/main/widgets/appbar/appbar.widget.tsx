import { FC } from 'react';
import {IconButton, Toolbar } from '@mui/material';
import { Menu, MenuOpen, PowerSettingsNew } from '@mui/icons-material';

import { StyledAppBar } from './appbar.styles';
import { useAuth } from '@/core/hooks';

interface Props {
	open: boolean;
	handleDrawerToggle: () => void;
}

export const AppBarWidget: FC<Props> = (props) => {
	const { open, handleDrawerToggle } = props;
	const { onLogout } = useAuth();

	return (
		<StyledAppBar 
			position="fixed" 
			open={open}
			elevation={0}
		>
			<Toolbar sx={{
				display: 'flex',
				justifyContent: 'flex-end',
			}}>
				<IconButton
					aria-label="open drawer"
					onClick={handleDrawerToggle}
					edge="start"
					sx={{ mr: 2 }}
				>
					{
						open ? <MenuOpen /> : <Menu />
					}
				</IconButton>
				<IconButton
					aria-label="logout"
					onClick={onLogout}
					edge="start"
					sx={{ mr: 2 }}
				>
					<PowerSettingsNew/>
				</IconButton>
			</Toolbar>
		</StyledAppBar>
	);
};
