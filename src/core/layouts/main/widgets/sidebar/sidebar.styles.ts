import { drawerWidth } from '@/core/theme/constants';
import { theme } from '@/core/theme/theme';
import { styled, SxProps, Theme } from '@mui/material';

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export const drawerStyles: SxProps<Theme> =	{
	width: `${drawerWidth}px`,
	flexShrink: 0,
	'& .MuiDrawer-paper': {
		border: 'none',
		height: `calc(100% - ${theme.spacing(4)})`,
		backgroundColor: theme.palette.secondary.main,
		width: `${drawerWidth}px`,
		margin: theme.spacing(2),
		boxSizing: 'border-box',
	},
};

export const drawerContainerStyles: SxProps<Theme> = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.common.black,
	borderRadius: '1rem',
};
export const sidebarItemStyles: SxProps<Theme> = {
	'&: hover': {
		backgroundColor: theme.palette.primary.hovered,
		color: theme.palette.common.white,
	},
	paddingY: '12px',
	paddingX: '24px'
};

