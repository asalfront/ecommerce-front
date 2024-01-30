import { SxProps, Theme } from '@mui/material/styles';

import backgroundAuth from '../../../../../assets/img/background-auth.png';

export const backgroundStyles: SxProps<Theme> = {
	position: 'absolute',
	width: '55.1%',
	height: '100%',
	backgroundColor: 'white',
	backgroundImage: `url(${backgroundAuth})`,
	backgroundRepeat: ' no-repeat',
	backgroundSize: '100% 100%',
	zIndex: '50'
} as const;
