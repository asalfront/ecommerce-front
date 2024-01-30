import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import { Close } from '@mui/icons-material';
import { Alert, Box, IconButton, Snackbar, Typography } from '@mui/material';

import { snackbarUIStyles, alertUIStyles, alertContainerUIStyles } from './snackbar-ui.styles';

interface SnackBarSettings {
	message: string;
	type: 'info' | 'success' | 'warning' | 'error';
}

export interface SnackBarRef  {
	open: (_settings: SnackBarSettings) => void;
	close: () => void;
}

const SnackBarUI:ForwardRefRenderFunction<SnackBarRef>  = (_, ref) => {
	const [open, setOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('Reload the app');
	const [type, setType] = useState<'info' | 'success' | 'warning' | 'error'>('info');

	const onClose = () => {
		setOpen(false);
	};

	useImperativeHandle(ref, () => ({
		open: (settings) => {
			setOpen(true);
			setMessage(settings.message);
			setType(settings.type);
		},
		close: () => onClose(),
	}));

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			open={open}
			onClose={onClose}
			message={message}
			sx={snackbarUIStyles}
		>
			<Alert severity={type} sx={alertUIStyles}>
				<Box sx={alertContainerUIStyles}>
					<Typography variant='h4' sx={{ color: 'white' }}>
						{message}
					</Typography>
					<IconButton size='small' aria-label='close' color='inherit' onClick={onClose}>
						<Close fontSize='small' />
					</IconButton>
				</Box>
			</Alert>
		
		</Snackbar>
	
	);
};

export const SnackBarUIWidget = forwardRef<SnackBarRef>(SnackBarUI);
