import { Grid } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { ButtonWidget, InputFieldWidget } from '@/core/widgets';
import { Title } from '@/core/theme/app.styles';
import { BoxButtons, SubText } from './recover.styles';
import { formModel } from './validations';
import useRecoverPassword from './recover-password.hook';

const RecoverPasswordPage = () => {
	const { control, handleSubmit, onSend, onCancel } = useRecoverPassword();
	const { formField, formId } = formModel;

	return (
		<Grid container direction="column" spacing={2}>
			<Grid item>
				<Title>Forgot Password</Title>
			</Grid>
			<Grid item>
				<SubText>Enter your registered email below to receive a password reset code</SubText>
			</Grid>
			<Grid item>
				<form onSubmit={handleSubmit(onSend)} id={formId}>
					<Grid container direction='column' spacing={2}>
						<Grid item>
							<InputFieldWidget
								control={control}
								label={formField.email.label}
								name={formField.email.name}
								endAdornment={<AccountCircle />}
							/>
						</Grid>
						<BoxButtons>
							<Grid item>
								<ButtonWidget
									onClick={onCancel}
									label="Cancel"
									type="secondary"
								/>
							</Grid>
							<Grid item>
								<ButtonWidget
									label="Send"
									type="primary"
									submit
								/>
							</Grid>
						</BoxButtons>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};

export default RecoverPasswordPage;
