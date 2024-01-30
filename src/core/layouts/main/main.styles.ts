import { styled, SxProps, Theme } from '@mui/material';

import { drawerWidth } from '@/core/theme/constants';
import { theme } from '@/core/theme/theme';


export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ open }) => ({
	flexGrow: 1,
	minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
	backgroundColor: theme.palette.secondary.main,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginTop: theme.mixins.toolbar.minHeight,
	marginLeft:`-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: theme.spacing(2),
	}),
}));

export const appContentStyles: SxProps<Theme> = { 
	display: 'flex', 
	backgroundColor: theme.palette.secondary.main
};
