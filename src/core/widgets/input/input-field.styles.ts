import { SxProps, Theme } from '@mui/material';

export const inputLabelStyles: SxProps<Theme> ={
	marginBottom: '16px',
	display: 'block',
} as const;

export const startAdornmentStyles: SxProps<Theme> = {
	marginRight: '4px',
} as const;
