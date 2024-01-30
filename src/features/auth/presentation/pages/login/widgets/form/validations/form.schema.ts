import * as Yup from 'yup';
import { formModel } from './form.model';

const {
	formField: {
		email,
		password
	}
} = formModel;

export const formSchema = Yup.object().shape({
	[email.name]: Yup.string().email().required(`${email.errorMessage}`),
	[password.name]: Yup.string().required(`${password.errorMessage}`),
});
