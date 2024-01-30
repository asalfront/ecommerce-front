import { theme } from '@/core/theme/theme';
import { SxProps, Theme } from '@mui/material';

export const sidebarItemStyles: SxProps<Theme> = {
	'&: hover': {
		backgroundColor: theme.palette.primary.hovered,
		color: theme.palette.common.white,
		'svg': {
			color: theme.palette.common.white
		}
	},
	'svg': {
		color: theme.palette.primary.hovered
	}, 
	paddingY: '12px',
	paddingX: '24px'
};
