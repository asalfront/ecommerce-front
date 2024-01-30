import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from '@mui/material';
import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import { ButtonWidget } from '../button/button.widget';
import waitIcon from '@/assets/icon/wait.svg';
import errorIcon from '@/assets/icon/error.svg';
import successIcon from '@/assets/icon/success.svg';
import { Close } from '@mui/icons-material';
import { closeButtonStyles, dialogContainerStyles, dialogContentStyles } from './dialog-ui.styles';

type dialogType =   | 'error' | 'success' | 'wait';

interface DialogSettings {
	title?: string;
	content?: string;
	type?: dialogType;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: (() => void) | null;
	onCancel?: () => void;
}

export interface DialogRef  {
	open: (_:DialogSettings) => void;
	close: () => void;
}

const initialSettings: DialogSettings = {
	title: 'Title',
	content: 'Content',
	type: 'wait',
	confirmText: 'Confirm',
	cancelText: 'Cancel',
	onConfirm: null,
	onCancel: () => {},
};

const DialogUI:ForwardRefRenderFunction<DialogRef>  = (_, ref) => {
	const [open, setOpen] = useState<boolean>(false);
	const [settings, setSettings] = useState<DialogSettings>(initialSettings);

	const onClose = () => {
		setOpen(false);
	};

	useImperativeHandle(ref, () => ({
		open: (settings) => {
			const newSettings = {...initialSettings, ...settings};
			setSettings(newSettings);
			setOpen(true);
		},
		close: () => setOpen(false),
	}));

	let icon: JSX.Element | null = null;

	if (settings.type === 'wait') {
		icon = <img src={waitIcon} alt="wait" width="120px" />;
	}

	if (settings.type === 'error') {
		icon = <img src={errorIcon} alt="oops" width="120px"/>;
	}

	if (settings.type === 'success') {
		icon = <img src={successIcon} alt="success" width="120px" />;
	}

	return (
		<>
			<Dialog
				fullWidth={true}
				open={open}
				onClose={onClose}
				onBackdropClick={onClose}
				PaperProps={{
					sx: dialogContainerStyles
				}}		
			>
				<Box display="flex" justifyContent="center">
					{icon}
				</Box>
				<DialogTitle 
					display="flex" 
					justifyContent="center"
					fontSize="2.75rem"
					fontWeight="600"
					padding="12px 0"
				>
					{settings.title}
				</DialogTitle>
				<IconButton 
					size='small' 
					aria-label='close' 
					color='primary' 
					onClick={onClose}
					sx={closeButtonStyles}
				>
					<Close fontSize='small' />
				</IconButton>
				<DialogContent sx={dialogContentStyles}>
					<DialogContentText 
						display="flex" 
						justifyContent="center" 
						fontSize="1.375rem"
						fontWeight="600"
					>
						{settings.content}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Grid 
						container 
						direction='row'
						alignItems='center' 
						justifyContent="center" 
						spacing={12}
					>
						{
							settings.onConfirm ? (
								<>	
									<Grid item xs={6}>
										<ButtonWidget
											onClick={onClose}
											label={settings.cancelText}
											type='secondary'
										/>
									</Grid>
									<Grid item xs={6}>
										<ButtonWidget
											onClick={settings.onConfirm}
											label={settings.confirmText}
											type='primary'
										/>
									</Grid>
								</>
							):(
								<Grid item xs={6}>
									<ButtonWidget
										onClick={onClose}
										label={settings.cancelText}
										type='primary'
									/>
								</Grid>
							)
						}
					</Grid>
				</DialogActions>		
			</Dialog>
		</>
	);

};

export const DialogUIWidget = forwardRef<DialogRef>(DialogUI);
