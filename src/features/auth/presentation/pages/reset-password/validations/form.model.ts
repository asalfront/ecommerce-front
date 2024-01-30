export const formModel = {
	formId: 'resetPasswordForm',
	formField: {
		email: {
			name: 'email',
			label: 'Email:',
			placeholder: 'Email',
			requiredErrorMsg: 'Email is required',
		},
		password: {
			name: 'password',
			label: 'New password:',
			placeholder: 'Password',
			requiredErrorMsg: 'Password is required',
		},
		passwordConfirmation: {
			name: 'password_confirmation',
			label: 'Confirm new password:',
			placeholder: 'Password confirmation',
			requiredErrorMsg: 'Password confirmation is required',
		},
	}
};
