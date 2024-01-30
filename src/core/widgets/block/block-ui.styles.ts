import { SxProps, Theme } from '@mui/material';

export const backDropStyles: SxProps<Theme> = {
	zIndex: (theme) => theme.zIndex.tooltip,
	color: '#fff',
	margin: 0,
};
