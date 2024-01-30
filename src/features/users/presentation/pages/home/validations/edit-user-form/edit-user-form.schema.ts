import * as Yup from 'yup';

import { editUserModel } from './edit-user-form.model';

const {
	formField: {
		firstName,
		lastName,
		email,
		password,
		role,
	}
} = editUserModel;

export const editUserValidation = Yup.object().shape({
	[firstName.name]: Yup.string(),
	[lastName.name]: Yup.string(),
	[email.name]: Yup.string().email().required(email.requiredErrorMsg),
	[password.name]: Yup.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
			'Must contain 8 characters, one Uppercase, one Lowercase and one Number'
		).nullable(),
	[role.name]: Yup.string().required(role.requiredErrorMsg),
});

