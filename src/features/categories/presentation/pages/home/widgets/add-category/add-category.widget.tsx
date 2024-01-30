import { FC } from 'react';
import { Grid } from '@mui/material';

import { InputFieldWidget, ModalUIWidget, SelectFieldWidget } from '@/core/widgets';
import { useCreateCategory } from '@/features/categories/presentation/pages/home/hooks';
import { addCategoryModel } from '@/features/categories/presentation/pages/home/validations';

interface Props {
	open: boolean;
	onClose: () => void;
}

export const AddCategoryWidget: FC<Props> = (props) => {
	const { open, onClose } = props;
	const { control, createCategory, reset, categories } = useCreateCategory();

	const { formField, formId } = addCategoryModel;

	const onCancel = () => {
		reset();
		onClose();
	};

	return (
		<>
			<ModalUIWidget
				open={open}
				formId={formId}
				title="Add New Category"
				onCancel={onCancel}
				onSave={() => createCategory(onClose)}
			>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.name.label}
							placeholder={formField.name.placeholder}
							name={formField.name.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<InputFieldWidget
							label={formField.description.label}
							placeholder={formField.description.placeholder}
							name={formField.description.name}
							control={control}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<SelectFieldWidget
							label={formField.sons.label}
							placeholder={formField.sons.placeholder}
							name={formField.sons.name}
							control={control}
							multiple
							options={categories}
						/>
					</Grid>
				</Grid>
			</ModalUIWidget>
		</>
	);
};
