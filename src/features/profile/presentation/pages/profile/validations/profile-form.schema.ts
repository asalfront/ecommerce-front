import * as Yup from 'yup';
import { profileModel } from './profile-form.model';

const {
	formField: {
		email,
		firstName,
		lastName,
	}
} = profileModel;

export const profileSchema = Yup.object().shape({
	[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
	[email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
	[lastName.name]: Yup.string().nullable(),
});
