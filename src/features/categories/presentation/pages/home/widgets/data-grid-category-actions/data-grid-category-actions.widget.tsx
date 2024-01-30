import { FC, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { BorderColorOutlined, DeleteOutlined } from '@mui/icons-material';

import { dataGridButtonsContainerStyles, iconButtonStyles, iconStyles } from './data-grid-category-actions.styles';
import { useDialog } from '@/core/hooks';
import { Category } from '@/features/categories/domain/entities';
import { useDeleteCategory } from '@/features/categories/presentation/pages/home/hooks';
import { EditCategoryWidget } from '@/features/categories/presentation/pages/home/widgets';

interface Props {
	category: Category;
}

export const DataGridCategoryActions: FC<Props>= (props) => {
	const { category } = props;
	const [editCategoryModal, setEditCategoryModal] = useState(false);
	const { onDeleteCategory } = useDeleteCategory(category.id);
	const { showConfirmDialog } = useDialog();

	const onDeleteCategoryConfirmation = () => {
		showConfirmDialog({
			title: 'Wait!',
			content: 'Are you sure you want to delete this category?',
			cancelText: 'Cancel',
			confirmText: 'Delete',
			onConfirm: () => onDeleteCategory(),
		});
	};

	return (
		<Box sx={dataGridButtonsContainerStyles}>
			<IconButton 
				onClick={onDeleteCategoryConfirmation}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<DeleteOutlined sx={iconStyles}/>
			</IconButton>
			<IconButton 
				onClick={() => setEditCategoryModal(true)}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<BorderColorOutlined sx={iconStyles}/>
			</IconButton>
			{
				editCategoryModal && (
					<EditCategoryWidget
						id={category.id}
						open={editCategoryModal}
						onClose={() => setEditCategoryModal(false)}
					/>
				)
			}
		</Box> 
	);
};
