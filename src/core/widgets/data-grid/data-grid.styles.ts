import { styled } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({theme}) => ({
	border: 'none',
	[`& .${gridClasses.row}.odd`]: {
		backgroundColor: theme.palette.secondary.light,
		'&:hover, &.Mui-hovered': {
			backgroundColor: theme.palette.secondary.main,
			'@media (hover: none)': {
				backgroundColor: 'transparent',
			},
		},
	},
	[`& .${gridClasses.row}.even`]: {
		backgroundColor: theme.palette.common.white,
		'&:hover, &.Mui-hovered': {
			backgroundColor: theme.palette.secondary.main,
			'@media (hover: none)': {
				backgroundColor: 'transparent',
			},
		},
	},
	[`& .${gridClasses.main}`]: {
		border: '1px solid',
		borderRadius: '16px',
		borderColor: theme.palette.primary.main,
	},

	[`& .${gridClasses.columnHeaders}`]: {
		borderBottom: '1px solid',
		backgroundColor: theme.palette.tertiary.main,
		borderColor: theme.palette.primary.main,
	},
	[`& .${gridClasses.columnHeaderTitle}`]: {
		fontSize: '1rem',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '800',
		[theme.breakpoints.down('lg')]: {
			fontSize: '0.875rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '0.85rem',
		},
	},
	[`& .${gridClasses.iconSeparator}`]: {
		display: 'none',
	},
	[`& .${gridClasses.columnHeader}`]: {
		padding: '0px 16px',
		borderRight: `1px solid ${theme.palette.primary.main}`,
	},
	[`& .${gridClasses.cell}`]: {
		border: 'none',
		borderRight: `1px solid ${theme.palette.primary.main}`,
		fontFamily: 'Inter',
		fontSize: '0.875rem',
		fontStyle: 'normal',
		fontWeight: '400',

		'&:focus-within': {
			outline: 'none',
		},

		[theme.breakpoints.down('lg')]: {
			fontSize: '0.85rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '0.75rem',
		},
	},
	[`& .${gridClasses.virtualScroller}`]: {
		'&::-webkit-scrollbar': {
			width: '2px',
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: theme.palette.tertiary.main,
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: theme.palette.secondary.light,
			borderRadius: '16px',
		},
	},
}));
