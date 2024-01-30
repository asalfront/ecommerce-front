import { theme } from '@/core/theme/theme';
import { SxProps, Theme } from '@mui/material';

export const sidebarItemCollapseStyles: SxProps<Theme> = {
	'&: hover': {
		backgroundColor: theme.palette.primary.hovered,
	},
	paddingY: '12px',
	paddingX: '24px'
};
