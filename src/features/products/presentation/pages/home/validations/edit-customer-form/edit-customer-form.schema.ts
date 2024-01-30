import * as Yup from 'yup';

import { editCustomerModel } from './edit-customer-form.model';

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
} = editCustomerModel;

export const editCustomerValidation = Yup.object().shape({
	[firstName.name]: Yup.string(),
	[lastName.name]: Yup.string(),
	[email.name]: Yup.string().email().required(email.requiredErrorMsg),
	[password.name]: Yup.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
			'Must contain 8 characters, one Uppercase, one Lowercase and one Number'
		).nullable(),
	[isActive.name]: Yup.boolean(),
	[billingAddress.name]: Yup.string().nullable(),
	[shippingAddress.name]: Yup.string().nullable(),
});

