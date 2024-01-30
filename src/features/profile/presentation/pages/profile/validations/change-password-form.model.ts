export const changePasswordModel = {
	formId: 'changePasswordModel',
	formField: {
		oldPassword: {
			name: 'old_password',
			label: 'Actual password',
			placeholder: '********',
			requiredErrorMsg: 'Actual Password is required',
		},
		newPassword: {
			name: 'new_password',
			label: 'New password',
			placeholder: '********',
			requiredErrorMsg: 'New Password is required',
		},
		confirmPassword: {
			name: 'new_password_confirmation',
			label: 'Reconfirm password',
			placeholder: '********',
			requiredErrorMsg: 'Confirm Password is required',
		},
	}
};
