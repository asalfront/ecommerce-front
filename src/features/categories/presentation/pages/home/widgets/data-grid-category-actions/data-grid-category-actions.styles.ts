import { SxProps, Theme } from '@mui/material';

export const dataGridButtonsContainerStyles: SxProps<Theme> = {
	width: '100%',
	display: 'flex',
	padding: '10px 16px',
	justifyContent: 'space-between',
	alignItems: 'center',
} as const;

export const iconButtonStyles: SxProps<Theme> = {
	'&:hover': {
		backgroundColor: color => color.palette.secondary.hovered,
	},
};

export const iconStyles: SxProps<Theme> = { 
	color: color => color.palette.primary.main,
	fontSize: {
		xs: '1.1rem',
		md: '1.5rem',
	} 
};
