import { SxProps, Theme } from '@mui/material';

export const dialogContainerStyles: SxProps<Theme> = {
	maxWidth: '1080px',
	borderRadius: '16px',
	padding: '64px',
};

export const closeButtonStyles: SxProps<Theme> = {
	position: 'absolute',
	top: '64px',
	right: '64px',
};

export const dialogContentStyles: SxProps<Theme> = {
	padding: '12px 0px 64px 0px',
};
