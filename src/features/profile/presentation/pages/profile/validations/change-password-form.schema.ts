import * as Yup from 'yup';
import { changePasswordModel } from './change-password-form.model';

const {
	formField: {
		oldPassword,
		newPassword,
		confirmPassword,
	}
} = changePasswordModel;

export const changePasswordSchema = Yup.object().shape({
	[oldPassword.name]: Yup.string().required(`${oldPassword.requiredErrorMsg}`)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			'Must contain 8 characters, one Uppercase, one Lowercase and one Number'
		),
	[newPassword.name]: Yup.string().required(`${newPassword.requiredErrorMsg}`)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			'Must contain 8 characters, one Uppercase, one Lowercase and one Number'
		),
	[confirmPassword.name]: Yup.string()
		.oneOf([Yup.ref(newPassword.name), ''], 'Passwords must match')
		.required('Required'),
});
