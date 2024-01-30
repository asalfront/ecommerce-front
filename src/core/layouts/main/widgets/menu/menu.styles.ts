import { SxProps, Theme } from '@mui/material';

export const menuPaperStyles: SxProps<Theme> = {
	border: (theme) => `1.5px solid ${theme.palette.primary.main}`,
	color: (theme) => theme.palette.text.primary,
	marginTop: '48px',
	padding: 0,
} as const;

export const dividerStyles: SxProps<Theme> = {
	backgroundColor: (theme) => theme.palette.primary.main,
	height: '1.5px',
} as const;

export const menuListStyles: SxProps<Theme> = {
	padding: 0, 
	margin: 0 
} as const;	

export const menuItemStyles: SxProps<Theme> = {
	padding: '16px 0 16px 24px',
	width: '240px',
	backgroundColor: 'red',
	'&:hover': {
		backgroundColor: (theme) => theme.palette.secondary.main,
		color: (theme) => theme.palette.common.white,
	},
} as const;
