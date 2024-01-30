import { SxProps, Theme } from '@mui/material/styles';

export const loaderStyles:SxProps<Theme> = {
	zIndex: (theme: Theme) => theme.zIndex.drawer + 100,
	color: (theme: Theme) => theme.palette.primary.main,
} as const;
