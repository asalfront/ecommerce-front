import { Grid } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';

import { ButtonWidget, InputFieldWidget, InputPasswordFieldWidget } from '@/core/widgets';
import { Title } from '@/core/theme/app.styles';
import { formModel } from './validations';
import useResetPassword from './reset-password.hook';

const ResetPasswordPage = () => {
	const { control, handleSubmit, onResetPassword, onGoToLogin, passwordChanged } = useResetPassword();
	const { formField, formId } = formModel;

	return (
		<Grid container direction="column" spacing={2}>
			{passwordChanged
				?
				<>
					<Grid item>
						<Title>Reset Password</Title>
					</Grid>
					<Grid item>
						<ButtonWidget
							onClick={onGoToLogin}
							label="Go To Login"
							type="primary"
						/>
					</Grid>
				</>
				:
				<Grid item>
					<form onSubmit={handleSubmit(onResetPassword)} id={formId}>
						<Grid container direction="column" spacing={2}>
							<Grid item>
								<InputFieldWidget
									control={control}
									name={formField.email.name}
									label={formField.email.label}
									placeholder={formField.email.placeholder}
									endAdornment={<EmailOutlined />}
								/>
							</Grid>
							<Grid item>
								<InputPasswordFieldWidget
									control={control}
									label={formField.password.label}
									placeholder={formField.password.placeholder}
									name={formField.password.name}
									autoComplete={'off'}
								/>
							</Grid>
							<Grid item>
								<InputPasswordFieldWidget
									control={control}
									label={formField.passwordConfirmation.label}
									placeholder={formField.passwordConfirmation.placeholder}
									name={formField.passwordConfirmation.name}
								/>
							</Grid>
							<Grid item mt={4}>
								<ButtonWidget
									label="Send"
									type="primary"
									submit
								/>
							</Grid>
						</Grid>
					</form>
				</Grid>
			}
		</Grid>
	);
};

export default ResetPasswordPage;
