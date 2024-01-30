import { SxProps, Theme } from '@mui/material';

export const snackbarUIStyles: SxProps<Theme> = {
	'& .MuiPaper-root': {
		display: 'flex',
		borderRadius: '0',
		justifyContent: 'center',
		position: 'fixed',
		alignItems: 'center',
		padding: '12px 12px',
		top: '-24px',
	},
} as const;

export const alertUIStyles: SxProps<Theme> = {
	display: 'flex',
	justifyContent: 'center',
	position: 'fixed',
	alignItems: 'center',
	width: '100vw',
	'& .MuiAlert-message': {
		fontSize: '1.25rem',
		width: '100%',
	},
} as const;

export const alertContainerUIStyles: SxProps<Theme> = {
	display: 'flex',
	flex: 1,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-between',
} as const;
