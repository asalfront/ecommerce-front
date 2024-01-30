import { FC } from 'react';
import { Grid } from '@mui/material';

import { InputFieldWidget, ModalUIWidget, SelectFieldWidget } from '@/core/widgets';
import { useEditCategory } from '@/features/categories/presentation/pages/home/hooks';
import { editCategoryModel } from '@/features/categories/presentation/pages/home/validations';

interface Props {
	id: number;
	open: boolean;
	onClose: () => void;
}

export const EditCategoryWidget: FC<Props> = (props) => {
	const { id, open, onClose } = props;
	const { control, onUpdateCategory , onCancel, categories} = useEditCategory(id);

	const { formField, formId } = editCategoryModel;


	return (
		<>
			<ModalUIWidget
				open={open}
				formId={formId}
				title="Edit Category"
				onCancel={() => onCancel(onClose)}
				onSave={() => onUpdateCategory(onClose)}
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
