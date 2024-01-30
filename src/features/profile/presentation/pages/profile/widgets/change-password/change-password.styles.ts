import { SxProps, Theme } from '@mui/material';

export const dialogContainerStyles: SxProps<Theme> = {
	maxWidth: '1080px',
	borderRadius: '16px',
	padding: '73px 93px',
};

export const dialogTitleStyles: SxProps<Theme> ={
	padding: '24px 0px',
};

export const closeButtonStyles: SxProps<Theme> = {
	position: 'absolute',
	top: '64px',
	right: '64px',
};

export const dialogContentStyles: SxProps<Theme> = {
	padding: '12px 0px 100px 0px',
};

export const dialogActionsStyles: SxProps<Theme> = {
	padding: '0px 0px 0px 0px',
};
