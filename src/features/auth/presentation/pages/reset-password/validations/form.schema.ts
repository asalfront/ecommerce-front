import * as Yup from 'yup';
import { formModel } from './form.model';

const {
	formField: {
		email,
		password,
		passwordConfirmation,
	}
} = formModel;

export const formSchema = Yup.object().shape({
	[email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
	[password.name]: Yup.string().required(`${password.requiredErrorMsg}`)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			'Must contain 8 characters, one Uppercase, one Lowercase and one Number'
		),
	[passwordConfirmation.name]: Yup.string()
		.oneOf([Yup.ref(password.name), ''], 'Passwords must match')
		.required(`${passwordConfirmation.requiredErrorMsg}`),
});
