import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';

import { ButtonWidget, InputFieldWidget, InputPasswordFieldWidget } from '@/core/widgets';
import useFormLogin from './form.hook';
import { formWidgetStyles } from './form.styles';
import { formModel } from './validations';

const FormWidget = () => {
	const { control, handleSubmit, onLogin } = useFormLogin();
	const { formField, formId } = formModel;

	return (
		<form onSubmit={handleSubmit(onLogin)} id={formId}>
			<Grid container direction="column" spacing={2}>
				<Grid item>
					<InputFieldWidget
						control={control}
						label={formField.email.label}
						name={formField.email.name}
						endAdornment={<AccountCircle />}
					/>
				</Grid>
				<Grid item>
					<InputPasswordFieldWidget
						control={control}
						label={formField.password.label}
						name={formField.password.name}
					/>
				</Grid>
				<Grid item sx={formWidgetStyles.txtRight}>
					<Link to="/auth/recover-password">Forgot Your Password?</Link>
				</Grid>
				<Grid item>
					<ButtonWidget
						label="Login"
						type="primary"
						submit
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormWidget;
