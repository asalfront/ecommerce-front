import { SxProps, Theme } from '@mui/material';

export const selectLabelStyles: SxProps<Theme> ={
	marginBottom: '16px',
	display: 'block',
} as const;

export const selectPaperStyles: SxProps<Theme> =  {
	borderRadius: '6px',
	boxShadow: 'none',
	border: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
	'& .MuiList-root': {
		padding: '0px',
	},
} as const;

export const selectRestItemStyles: SxProps<Theme> = {
	borderBottom: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
	'&:hover': {
		backgroundColor: (theme) => theme.palette.secondary.main,
		color: (theme) => theme.palette.text.secondary,
	},
} as const;

export const defaultItemStyles: SxProps<Theme> = {
	display: 'none',
} as const;

export const placeholderItemStyles: SxProps<Theme> = {
	color: theme => theme.palette.text.disabled,
	fontWeight: 100,
	fontSize: 16

} as const;

export const selectlastItemStyles: SxProps<Theme> = {
	'&:hover': {
		backgroundColor: (theme) => theme.palette.secondary.main,
		color: (theme) => theme.palette.text.secondary,
	},
} as const;


export const chipStyles: SxProps<Theme> = {
	backgroundColor: (theme) => theme.palette.secondary.main,
	height: '1.6rem',
} as const;

export const selectContainer: SxProps<Theme> = { 
	display: 'flex', 
	flexWrap: 'wrap', 
	gap: 0.5
} as const; 

export const inputStyles: SxProps<Theme> = { 
	width: '100%', 
	fontSize: '1rem', 
	fontWeight: '400'
} as const;

export const placeholderStyles: SxProps<Theme> = {
	color: theme => theme.palette.text.disabled,
	fontWeight: '400',
	fontSize: '1rem',
} as const;
