import { FC, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { BorderColorOutlined, DeleteOutlined, FavoriteOutlined } from '@mui/icons-material';
import { dataGridButtonsContainerStyles, iconButtonStyles, iconStyles } from './data-grid-customer-actions.styles';
import { useDialog } from '@/core/hooks';
import { EditCustomerWidget } from '@/features/customers/presentation/pages/home/widgets';
import { Customer } from '@/features/customers/domain/entities';
import { useDeleteCustomer } from '@/features/customers/presentation/pages/home/hooks';
import { ListCustomerFavoritesWidget } from '../list-customer-favorites/list-customer-favorites.widget';
import { useShoppingCartByUser } from '../../hooks/get-shopping-cart.hook';

interface Props {
	customer: Customer;
}

export const DataGridCustomerActions: FC<Props>= (props) => {
	const { customer } = props;
	const [editCustomerModal, setEditCustomerModal] = useState(false);
	const [listFavoritesModal, setListFavoritesModal] = useState(false);
	const { onDeleteCustomer } = useDeleteCustomer(customer.id);
	const { shoppingCartId } = useShoppingCartByUser();
	const { showConfirmDialog } = useDialog();

	const onDeleteCustomerConfirmation = () => {
		showConfirmDialog({
			title: 'Wait!',
			content: 'Are you sure you want to delete this customer?',
			cancelText: 'Cancel',
			confirmText: 'Delete',
			onConfirm: () => onDeleteCustomer(),
		});
	};

	return (
		<Box sx={dataGridButtonsContainerStyles}>
			<IconButton 
				onClick={onDeleteCustomerConfirmation}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<DeleteOutlined sx={iconStyles}/>
			</IconButton>
			<IconButton 
				onClick={() => setEditCustomerModal(true)}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<BorderColorOutlined sx={iconStyles}/>
			</IconButton>
			<IconButton 
				onClick={() => setListFavoritesModal(true)}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<FavoriteOutlined sx={iconStyles}/>
			</IconButton>
			{
				editCustomerModal && (
					<EditCustomerWidget
						id={customer.id}
						open={editCustomerModal}
						onClose={() => setEditCustomerModal(false)}
					/>
				)
			}
			{
				listFavoritesModal && (
					<ListCustomerFavoritesWidget
						shoppingCartId={shoppingCartId}
						open={listFavoritesModal}
						onClose={() => setListFavoritesModal(false)}
					/>
				)
			}
		</Box> 
	);
};
