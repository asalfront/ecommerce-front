import { SxProps, Theme } from '@mui/material';

export const autoCompletetLabelStyles: SxProps<Theme> ={
	marginBottom: '16px',
	display: 'block',
} as const;

export const paperStyles: SxProps<Theme> =  {
	borderRadius: '6px',
	padding: '0',
	boxShadow: 'none',
	border: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
	'& .MuiAutocomplete-listbox': {
		padding: '0',
	},
} as const;


export const autoCompleteStyles: SxProps<Theme> = {
	padding: '0',
	'& .MuiAutocomplete-inputRoot': {
		padding: '10.5px 32px 10.5px 14px',
	},
	'& .MuiAutocomplete-input': {
		padding: '0 !important',
	},
} as const;

export const optionStyles: SxProps<Theme> = {
	borderBottom: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
} as const;
