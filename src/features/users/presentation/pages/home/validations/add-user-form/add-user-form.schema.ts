import * as Yup from 'yup';

import { adUserModel } from './add-user-form.model';

const {
	formField: {
		firstName,
		lastName,
		email,
		password,
		role,
	}
} = adUserModel;

export const addUserValidation = Yup.object().shape({
	[firstName.name]: Yup.string(),
	[lastName.name]: Yup.string(),
	[email.name]: Yup.string().email().required(email.requiredErrorMsg),
	[password.name]: Yup.string().required(password.requiredErrorMsg)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			'Must contain 8 characters, one Uppercase, one Lowercase and one Number'
		),
	[role.name]: Yup.string().required(role.requiredErrorMsg),
});
