import { FC } from 'react';
import { Grid } from '@mui/material';

import { InputFieldWidget, InputPasswordFieldWidget, ModalUIWidget, SelectFieldWidget } from '@/core/widgets';
import { adUserModel } from '@/features/users/presentation/pages/home/validations';
import { useCreateUser } from '@/features/users/presentation/pages/home/hooks';

const roles = [
	{ value: 'admin', label: 'Admin' },
	{ value: 'Admin', label: 'Customer' },
];

interface Props {
	open: boolean;
	onClose: () => void;
}

export const AddUserWidget: FC<Props> = (props) => {
	const { open, onClose } = props;
	const { control, createUser, reset } = useCreateUser();

	const { formField, formId } = adUserModel;

	const onCancel = () => {
		reset();
		onClose();
	};

	return (
		<>
			<ModalUIWidget
				open={open}
				formId={formId}
				title="Add New Customer"
				onCancel={onCancel}
				onSave={() => createUser(onClose)}
			>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.firstName.label}
							placeholder={formField.firstName.placeholder}
							name={formField.firstName.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.lastName.label}
							placeholder={formField.lastName.placeholder}
							name={formField.lastName.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.email.label}
							placeholder={formField.email.placeholder}
							name={formField.email.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<InputPasswordFieldWidget
							label={formField.password.label}
							placeholder={formField.password.placeholder}
							name={formField.password.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<SelectFieldWidget
							label={formField.role.label}
							placeholder={formField.role.placeholder}
							name={formField.role.name}
							control={control}
							options={roles}
						/>
					</Grid>
				</Grid>
			</ModalUIWidget>
		</>
	);
};
