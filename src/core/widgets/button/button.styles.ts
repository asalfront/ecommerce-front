import { theme } from '@/core/theme/theme';
import { Button, buttonClasses, styled } from '@mui/material';

export type ButtonTypes = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizes = 'small' | 'medium' | 'large';

export const containerButtonStyles = (type: ButtonTypes) => {
	if(type === 'primary') {
		return {
			border: '1px solid',
			backgroundColor: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
			borderRadius: '0.375rem',
			transition: 'all 0.3s ease',
			'&:hover': {
				backgroundColor: theme.palette.primary.hovered,
				[`.${buttonClasses.root}.primary`]: {
					backgroundColor: theme.palette.primary.hovered,
					borderColor: theme.palette.primary.hovered,
				},
			},
		};
	}
	if(type === 'secondary') {
		return {
			border: '1px solid',
			borderRadius: '0.375rem',
			borderColor: theme.palette.primary.main,
			transition: 'all 0.3s ease',
			'&:hover': {
				[`.${buttonClasses.root}.secondary`]: {
					backgroundColor: '#FAFAFA',
					borderColor: '#FAFAFA'
				},
			},
		};
	}
	if(type === 'tertiary') {
		return {
			backgroundColor: theme.palette.tertiary.main,
			border: '1px solid',
			borderColor: theme.palette.tertiary.main,
			borderRadius: '0.375rem',
			transition: 'all 0.3s ease',
			'&:hover': {
				backgroundColor: theme.palette.tertiary.hovered,
				borderColor: theme.palette.tertiary.hovered,
				[`.${buttonClasses.root}.primary`]: {
					backgroundColor: theme.palette.tertiary.hovered,
					borderColor: theme.palette.tertiary.hovered,
				},
			},
		};
	}
};

export const StyledButton = styled(Button)(({theme}) => ({
	[`&.${buttonClasses.root}.primary-medium`]: {
		backgroundColor: theme.palette.primary.main,
		border: `1px solid ${theme.palette.primary.main}`,
		boxShadow: 'none',
		transition: 'all 0.3s ease',
		minWidth: '160px',
		'&:hover': {
			backgroundColor: theme.palette.primary.hovered,
			borderColor: theme.palette.primary.hovered,
		},
		'&:pressed': {
			backgroundColor: theme.palette.primary.pressed,
			borderColor: theme.palette.primary.pressed,
		},
		'&:focus': {
			backgroundColor: theme.palette.primary.hovered,
			borderColor: theme.palette.common.white,
		},
	},
	[`&.${buttonClasses.root}.primary-small`]: {
		backgroundColor: theme.palette.primary.main,
		border: `1px solid ${theme.palette.primary.main}`,
		padding: '0.125rem 0.5rem',
		fontSize: '0.875rem',
		boxShadow: 'none',
		transition: 'all 0.3s ease',
		minWidth: '108px',
		'&:hover': {
			backgroundColor: theme.palette.primary.hovered,
			borderColor: theme.palette.primary.hovered,
		},
		'&:pressed': {
			backgroundColor: theme.palette.primary.pressed,
			borderColor: theme.palette.primary.pressed,
		},
		'&:focus': {
			backgroundColor: theme.palette.primary.hovered,
			borderColor: theme.palette.common.white,
		},
		[theme.breakpoints.down('lg')]: {
			fontSize: '0.75rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '0.625rem',
		},
	},
	[`&.${buttonClasses.root}.secondary-medium`]: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
		border: `1px solid ${theme.palette.common.white}`,
		boxShadow: 'none',
		transition: 'all 0.3s ease',
		minWidth: '160px',
		'&:hover': {
			backgroundColor: '#FAFAFA',
			borderColor: '#FAFAFA',
		},
		'&:pressed': {
			backgroundColor: '#FAFAFA',
			borderColor: '#FAFAFA',
		},
		'&:focus': {
			backgroundColor: '#FAFAFA',
			borderColor: '#FAFAFA',
		},
	},
	[`&.${buttonClasses.root}.secondary-small`]: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
		border: `1px solid ${theme.palette.common.white}`,
		padding: '0.125rem 0.5rem',
		fontSize: '0.875rem',
		boxShadow: 'none',
		transition: 'all 0.3s ease',
		minWidth: '108px',
		'&:hover': {
			backgroundColor: '#FAFAFA',
			borderColor: '#FAFAFA',
		},
		'&:pressed': {
			backgroundColor: '#FAFAFA',
			borderColor: '#FAFAFA',
		},
		'&:focus': {
			backgroundColor: '#FAFAFA',
			borderColor: '#FAFAFA',
		},
		[theme.breakpoints.down('lg')]: {
			fontSize: '0.75rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '0.625rem',
		},
	},
	[`&.${buttonClasses.root}.tertiary-medium`]: {
		backgroundColor: theme.palette.tertiary.main,
		color: theme.palette.primary.main,
		border: `1px solid ${theme.palette.tertiary.main}`,
		boxShadow: 'none',
		transition: 'all 0.3s ease',
		minWidth: '160px',
		'&:hover': {
			backgroundColor: theme.palette.tertiary.hovered,
			borderColor: theme.palette.tertiary.hovered,
		},
		'&:pressed': {
			backgroundColor: theme.palette.tertiary.pressed,
			borderColor: theme.palette.tertiary.pressed,
		},
		'&:focus': {
			backgroundColor: theme.palette.tertiary.hovered,
			borderColor: theme.palette.tertiary.hovered,
		},
	},
	[`&.${buttonClasses.root}.tertiary-small`]: {
		backgroundColor: theme.palette.tertiary.main,
		color: theme.palette.primary.main,
		border: `1px solid ${theme.palette.tertiary.main}`,
		padding: '0.125rem 0.5rem',
		fontSize: '0.875rem',
		boxShadow: 'none',
		transition: 'all 0.3s ease',
		minWidth: '108px',
		'&:hover': {
			backgroundColor: theme.palette.tertiary.hovered,
			borderColor: theme.palette.tertiary.hovered,
		},
		'&:pressed': {
			backgroundColor: theme.palette.tertiary.pressed,
			borderColor: theme.palette.tertiary.pressed,
		},
		'&:focus': {
			backgroundColor: theme.palette.tertiary.hovered,
			borderColor: theme.palette.tertiary.hovered,
		},
		[theme.breakpoints.down('lg')]: {
			fontSize: '0.85rem',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '0.75rem',
		},
	},
}));
