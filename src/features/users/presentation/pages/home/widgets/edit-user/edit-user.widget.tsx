import { FC } from 'react';
import { Grid } from '@mui/material';

import { InputFieldWidget, ModalUIWidget, InputPasswordFieldWidget, SelectFieldWidget } from '@/core/widgets';
import { useEditUser } from '@/features/users/presentation/pages/home/hooks';
import { editUserModel } from '@/features/users/presentation/pages/home/validations';

interface Props {
	id: number;
	open: boolean;
	onClose: () => void;
}

const roles = [
	{ value: 'admin', label: 'Admin' },
	{ value: 'customer', label: 'Customer' },
];

export const EditUserWidget: FC<Props> = (props) => {
	const { id, open, onClose } = props;
	const { control, onUpdateUser , onCancel} = useEditUser(id);

	const { formField, formId } = editUserModel;

	return (
		<>
			<ModalUIWidget
				open={open}
				formId={formId}
				title="Edit User"
				onCancel={() => onCancel(onClose)}
				onSave={() => onUpdateUser(onClose)}
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
