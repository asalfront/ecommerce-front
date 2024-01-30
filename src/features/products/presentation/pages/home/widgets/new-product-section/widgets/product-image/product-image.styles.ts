import { SxProps, Theme } from '@mui/material';
import { theme } from '@/core/theme/theme';

export const defaultImageStyles: SxProps<Theme> = {
	position: 'relative',
	height: '32px',
	objectFit: 'cover',
	borderRadius: '8px',
	cursor: 'pointer',
	backgroundColor: theme.palette.primary.main,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: theme.palette.common.white,
};
