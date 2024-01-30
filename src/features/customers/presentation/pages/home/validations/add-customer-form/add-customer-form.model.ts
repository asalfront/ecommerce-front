export const addCustomerModel = {
	formId: 'addCustomerForm',
	formField: {
		firstName: {
			name: 'first_name',
			label: 'First Name',
			placeholder: 'First Name',
			requiredErrorMsg: 'First Name is required',
		},
		lastName: {
			name: 'last_name',
			label: 'Last Name',
			placeholder: 'Last Name',
			requiredErrorMsg: 'Last Name is required',
		},
		email: {
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			requiredErrorMsg: 'Email is required',
		},
		password: {
			name: 'password',
			label: 'Password',
			placeholder: 'Password',
			requiredErrorMsg: 'Password is required',
		},
		isActive: {
			name: 'is_active',
			label: 'Is Active',
			placeholder: 'Is Active',
			requiredErrorMsg: 'Is Active is required',
		},
		billingAddress: {
			name: 'billing_address',
			label: 'Billing Address',
			placeholder: 'Billing Address',
			requiredErrorMsg: 'Billing Address is required',
		},
		shippingAddress: {
			name: 'shipping_address',
			label: 'Shipping Address',
			placeholder: 'Shipping Address',
			requiredErrorMsg: 'Shipping Address is required',
		},
	}
};
