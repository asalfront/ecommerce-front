import { FC, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { BorderColorOutlined, CommentOutlined, DeleteOutlined } from '@mui/icons-material';

import { dataGridButtonsContainerStyles, iconButtonStyles, iconStyles } from './data-grid-product-actions.styles';
import { useDialog } from '@/core/hooks';
import { Product } from '@/features/products/domain/entities';
import { useDeleteProduct, useProductContext } from '@/features/products/presentation/pages/home/hooks';
import { ProductWidget } from '../new-product-section/widgets/product/product.widget';
import { ListCustomerCommetsWidget } from '../list-customer-commets/list-customer-commets.widget';

interface Props {
	product: Product;
}

export const DataGridProductActions: FC<Props> = (props) => {
	const { product } = props;
	const { onOpenProductModal }  = useProductContext();
	const [listCommetsModal, setListCommetsModal] = useState(false);
	const { onDeleteProduct } = useDeleteProduct(product.id);
	const { showConfirmDialog } = useDialog();

	const onDeleteProductConfirmation = () => {
		showConfirmDialog({
			title: 'Wait!',
			content: 'Are you sure you want to delete this product?',
			cancelText: 'Cancel',
			confirmText: 'Delete',
			onConfirm: () => onDeleteProduct(),
		});
	};

	return (
		<Box sx={dataGridButtonsContainerStyles}>
			<IconButton
				onClick={() => setListCommetsModal(true)}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<CommentOutlined sx={iconStyles} />
			</IconButton>
			<IconButton 
				onClick={onDeleteProductConfirmation}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<DeleteOutlined sx={iconStyles}/>
			</IconButton>
			<IconButton 
				onClick={onOpenProductModal}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<BorderColorOutlined sx={iconStyles}/>
			</IconButton>
			<ProductWidget />
			{
				listCommetsModal && (
					<ListCustomerCommetsWidget
						id={product.id}
						open={listCommetsModal}
						onClose={() => setListCommetsModal(false)}
					/>
				)
			}
		</Box> 
	);
};
