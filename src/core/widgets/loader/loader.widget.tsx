import { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

import { loaderStyles } from './loader.styles';

interface Props {
	isLoading: boolean;
}

export const LoaderWidget: FC<Props> = (props: Props) => {
	const { isLoading } = props;
	return (
		<Backdrop
			open={isLoading}
			sx={loaderStyles}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};
