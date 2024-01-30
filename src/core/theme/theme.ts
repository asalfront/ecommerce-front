import { createTheme } from '@mui/material/styles';
import Inter from '@/assets/fonts/Inter-Regular.ttf';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#41C1BE',
			contrastText: '#FFF',
			hovered: '#3AAFAE',
			pressed: '#2E8E8E',
		},
		secondary: {
			main: '#F4F9FF',
			light: '#FBFDFF',
			contrastText: '#FFF',
			hovered: '#E8F4FF',
			pressed: '#D9EDFF',
		},
		tertiary: {
			main: '#F2F7FF',
			light: '#F4F9FF',
			contrastText: '#FFF',
			hovered: '#E8F4FF',
			pressed: '#D9EDFF',
		},

	},
	spacing: 8,
	shape: {
		borderRadius: 16,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family:'Inter';
					src: url(${Inter});
				}
				* {
					font-family: 'Inter', sans-serif;
				}
			`,
		},
		MuiCardActionArea: {
			styleOverrides: {
				root: {
					backgroundColor: 'white',
					'.MuiCardActionArea-focusHighlight': {
						background: 'white',
					},
					'&:hover': {
						backgroundColor: '#F4F9FF',
					},
				},
			},
		},
		MuiAlert: {
			styleOverrides: {
				root: {
					color: '#FFF !important',
				},
				icon: {
					color: '#41C1BE !important',
					fontSize: '1.5rem',
				},
				standardSuccess: {
					backgroundColor: '#1D1D1D',
					color: '#FFF',
				},
				standardError: {
					backgroundColor: '#1D1D1D',
				},
				standardInfo: {
					backgroundColor: '#1D1D1D',
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: ({theme}) => ({
					backgroundColor: theme.palette.primary.main,
					height: '2px',
				}),
			},
		},
		MuiOutlinedInput:{
			styleOverrides: {
				input: {	
					padding: '10.5px 14px',
				},
				multiline: {
					padding: '0',
				},
				root: ({theme}) => ({
					'&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
						color: theme.palette.primary.main,
					}
				}),
			},
		},
		MuiButton: {
			styleOverrides: {
				disableElevation: {
					boxShadow: 'none',
				},
				root:({theme}) => ({
					borderRadius: '6px',
					boxShadow: 'none',
					fontSize: '1rem',
					fontWeight: 500,
					padding: '0.375rem 1.5rem',
					textTransform: 'none',

					[theme.breakpoints.down('lg')]: {
						fontSize: '0.875rem',
						padding: '0.375rem 1.25rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '0.85rem',
						padding: '0.375rem 1.25rem',
					},
				}),
			},
		},
		MuiTypography: {
			styleOverrides: {
				root:{
					fontFamily: 'Inter',
				},
				h1: ({theme}) => ({
					fontSize: '1.875rem',
					fontWeight: 600,
					[theme.breakpoints.down('lg')]: {
						fontSize: '1.75rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '1.625rem',
					},
				}),
				h2: ({theme}) => ({
					fontSize: '1.375rem',
					fontWeight: 600,
					[theme.breakpoints.down('lg')]: {
						fontSize: '1.25rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '1.125rem',
					},
				}),
				h3: ({theme}) => ({
					fontSize: '1.25rem',
					fontWeight: 400,
					[theme.breakpoints.down('lg')]: {
						fontSize: '1.125rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '1rem',
					},
				}),
				h4: ({theme}) => ({
					fontSize: '1rem',
					fontWeight: 500,
					[theme.breakpoints.down('lg')]: {
						fontSize: '0.875rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '0.85rem',
					},
				}),
				h5: ({theme}) => ({
					fontSize: '0.875rem',
					fontWeight: 400,
					[theme.breakpoints.down('lg')]: {
						fontSize: '0.85rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '0.75rem',
					},
				}),
				body1: ({theme}) => ({
					fontSize: '1.125rem',
					fontWeight: 600,
					[theme.breakpoints.down('lg')]: {
						fontSize: '1rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '0.875rem',
					},
				}),
				body2: ({theme}) => ({
					fontSize: '1.5rem',
					fontWeight: 500,
					[theme.breakpoints.down('lg')]: {
						fontSize: '1.25rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '1rem',
					},
				}),
				subtitle1: ({theme}) => ({
					fontSize: '1.125rem',
					fontWeight: 600,
					[theme.breakpoints.down('lg')]: {
						fontSize: '0.875rem',
					},
					[theme.breakpoints.down('md')]: {
						fontSize: '0.75rem',
					},
				}),
			},
		}
	},
});
