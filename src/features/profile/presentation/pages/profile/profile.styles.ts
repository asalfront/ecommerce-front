import { theme } from '@/core/theme/theme';
import { SxProps, Theme } from '@mui/material';

export const profileContainerStyles: SxProps<Theme> = {
	backgroundColor: (theme) => theme.palette.common.white,
	borderRadius: '16px',
	padding: '2.5rem 5.75rem',
	
	[theme.breakpoints.down('lg')]: {
		padding: '2.5rem 3.75rem',
	},
	[theme.breakpoints.down('md')]: {
		padding: '2.5rem 2.5rem',
	},
} as const;

export const applicationSelectStyles: SxProps<Theme> = {
	display: 'flex',
	gap: '10px'
} as const;
