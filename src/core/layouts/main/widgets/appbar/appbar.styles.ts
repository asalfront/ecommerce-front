import { AppBar, AppBarProps, styled } from '@mui/material';

import { drawerWidth } from '@/core/theme/constants';
import { theme } from '@/core/theme/theme';

interface StyledAppBarProps extends AppBarProps {
	open: boolean;
}

export const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<StyledAppBarProps>(({ open }) => ({
	backgroundColor: theme.palette.secondary.main,
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));
