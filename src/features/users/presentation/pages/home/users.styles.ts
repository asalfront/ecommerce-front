import { theme } from '@/core/theme/theme';
import { SxProps, Theme } from '@mui/material';

export const usersSectionStyles: SxProps<Theme> = {
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

export const selectContainerStyles: SxProps<Theme> = { 
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	gap: 3,
} as const;


