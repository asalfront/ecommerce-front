import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';
import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import { backDropStyles } from './block-ui.styles';

export interface BlockRef  {
	open: (_message?: string) => void;
	close: () => void;
}

const BlockUI:ForwardRefRenderFunction<BlockRef>  = (_, ref) => {
	const [visible, setVisible] = useState(false);
	const [message, setMessage] = useState('');

	useImperativeHandle(ref, () => ({
		open: (message = '') => {
			setVisible(true);
			if (message !== '') {
				setMessage(message);
			}
		},
		close: () => setVisible(false),
	}));

	let content: JSX.Element | null = null;

	if (message !== '') {
		content = (
			<Box 
				display="flex" 
				flexDirection="column" 
				justifyContent="center" 
				alignItems="center"
				gap={2}
			>
				<Typography variant="h4">{message}</Typography>
				<CircularProgress color="primary" />
			</Box>
		);
	}
	if (message === '') {
		content = <CircularProgress color="primary" />;
	}

	return (
		<Backdrop sx={backDropStyles} open={visible}>
			{content}
		</Backdrop>
	);
};

export const BLockUIWidget = forwardRef<BlockRef>(BlockUI);
