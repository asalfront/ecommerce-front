import { FC } from 'react';
import { Grid } from '@mui/material';

import { InputFieldWidget, InputPasswordFieldWidget, ModalUIWidget } from '@/core/widgets';
import { addCustomerModel } from '@/features/customers/presentation/pages/home/validations';
import { useCreateCustomer } from '@/features/customers/presentation/pages/home/hooks';

interface Props {
	open: boolean;
	onClose: () => void;
}

export const AddCustomerWidget: FC<Props> = (props) => {
	const { open, onClose } = props;
	const { control, createCustomer, reset } = useCreateCustomer();

	const { formField, formId } = addCustomerModel;

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
				onSave={() => createCustomer(onClose)}
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
					{/* <Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.billingAddress.label}
							placeholder={formField.billingAddress.placeholder}
							name={formField.billingAddress.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.shippingAddress.label}
							placeholder={formField.shippingAddress.placeholder}
							name={formField.shippingAddress.name}
							control={control}
						/>
					</Grid> */}
				</Grid>
			</ModalUIWidget>
		</>
	);
};
