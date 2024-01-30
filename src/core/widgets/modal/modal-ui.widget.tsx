
import { FC } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import { ButtonWidget } from '..';
import { closeButtonStyles, dialogActionsStyles, dialogContainerStyles, dialogContentStyles, dialogTitleStyles } from './modal-ui.styles';

interface Props {
	open: boolean;
	onCancel?: () => void;
	onSave?: () => void;
	formId?: string;
	title: string;
	children: JSX.Element | JSX.Element[];
	disabledButtons?: boolean;
}

export const ModalUIWidget: FC<Props> = (props) => {
	const { children, open, onCancel, onSave, title, formId, disabledButtons = false } = props;

	if (!open) {
		return null;
	}

	return (
		<>
			<Dialog
				fullWidth={true}
				open={open}
				onClose={onCancel}
				PaperProps={{
					sx: dialogContainerStyles
				}}		
			>
				<form id={formId} onSubmit={onSave}>
					<DialogTitle 
						fontSize={{
							xs: '1.625rem',
							lg: '1.75rem',
							md: '1.875rem',
						}}
						fontWeight="600"
						sx={dialogTitleStyles}
					>
						{title}
					</DialogTitle>
					<IconButton 
						size='small' 
						aria-label='close' 
						color='primary' 
						onClick={onCancel}
						sx={closeButtonStyles}
					>
						<Close fontSize='small' />
					</IconButton>
					<DialogContent sx={dialogContentStyles}>
						{children}
					</DialogContent>
					{!disabledButtons && (	
						<DialogActions sx={dialogActionsStyles}>
							<Grid 
								container 
								direction='row'
								alignItems='center' 
								justifyContent="space-between" 
								spacing={{
									xs: 10,
									md: 16
								}}
							>	 		
								<Grid item xs={6}>
									<ButtonWidget
										onClick={onCancel}
										label='Cancel'
										type='secondary'
									/>
								</Grid>
								<Grid item xs={6}>
									<ButtonWidget
										onClick={onSave}
										label='Save'
										type='primary'
									/>
								</Grid>			
							</Grid>
						</DialogActions>
					)}		
				</form>
			</Dialog>
		</>
	);
};

