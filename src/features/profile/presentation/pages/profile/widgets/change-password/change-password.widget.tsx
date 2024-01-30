import { FC } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

import { ButtonWidget, InputPasswordFieldWidget } from '@/core/widgets';
import { closeButtonStyles, dialogActionsStyles, dialogContainerStyles, dialogContentStyles, dialogTitleStyles } from './change-password.styles';
import useChangePassword from '../../hooks/change-password.hook';
import { changePasswordModel } from '../../validations';
import { ChangePassword } from '@/features/profile/domain/entities';
// import { ChangePassword } from '@/features/users/domain/entities';

interface Props {
	open: boolean;
	onClose: () => void;
}

export const ChangePasswordWidget: FC<Props> = (props) => {
	const { open, onClose } = props;
	const { control, handleSubmit, updatePassword, reset } = useChangePassword();

	const { formField, formId } = changePasswordModel;

	const onSave = (changePasswordForm: ChangePassword) => {
		updatePassword(changePasswordForm);
		onClose();
	};

	return (
		<>
			<Dialog
				fullWidth={true}
				open={open}
				onClose={() => {
					onClose();
					reset();
				}}
				PaperProps={{
					sx: dialogContainerStyles
				}}
			>
				<form onSubmit={handleSubmit(onSave)} id={formId}>
					<DialogTitle
						fontSize="2rem"
						fontWeight="600"
						sx={dialogTitleStyles}
					>
					Change password
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
						<Grid container spacing={4}>
							<Grid item xs={12} md={9}>
								<InputPasswordFieldWidget
									label={formField.oldPassword.label}
									placeholder={formField.oldPassword.placeholder}
									name={formField.oldPassword.name}
									control={control}
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<InputPasswordFieldWidget
									label={formField.newPassword.label}
									placeholder={formField.newPassword.placeholder}
									name={formField.newPassword.name}
									control={control}
								/>
							</Grid>
							<Grid item xs={12} md={9}>
								<InputPasswordFieldWidget
									label={formField.confirmPassword.label}
									placeholder={formField.confirmPassword.placeholder}
									name={formField.confirmPassword.name}
									control={control}
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography variant='h4' color={(theme) => theme.palette.common.black}>
									Your password must be at least 8 characters long, one uppercase, one lowercase, one number and one special character.
								</Typography>
							</Grid>
						</Grid>
					</DialogContent>
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
									onClick={() => {
										onClose();
										reset();
									}}
									label='Cancel'
									type='secondary'
								/>
							</Grid>
							<Grid item xs={6}>
								<ButtonWidget
									submit
									label='Save'
									type='primary'
								/>
							</Grid>
						</Grid>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
};
