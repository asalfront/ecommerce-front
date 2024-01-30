import * as Yup from 'yup';

import { addCustomerModel } from './add-customer-form.model';

const {
	formField: {
		firstName,
		lastName,
		email,
		password,
		isActive,
		billingAddress,
		shippingAddress,
	}
} = addCustomerModel;

export const addCustomerValidation = Yup.object().shape({
	[firstName.name]: Yup.string(),
	[lastName.name]: Yup.string(),
	[email.name]: Yup.string().email().required(email.requiredErrorMsg),
	[password.name]: Yup.string().required(password.requiredErrorMsg)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
			'Must contain 8 characters, one Uppercase, one Lowercase and one Number'
		),
	[isActive.name]: Yup.boolean(),
	[billingAddress.name]: Yup.string(),
	[shippingAddress.name]: Yup.string(),
});
