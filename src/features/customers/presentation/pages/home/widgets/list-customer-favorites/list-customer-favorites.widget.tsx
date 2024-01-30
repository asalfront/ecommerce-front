import { FC } from 'react';
import { Grid } from '@mui/material';
import { DataGridWidget, ModalUIWidget } from '@/core/widgets';
import { Commets } from '@/features/products/domain/entities';
import { GridColDef } from '@mui/x-data-grid';
import { useFavoritessByUser } from '../../hooks/get-favorites-list.hook';

interface Props {
	shoppingCartId: number;
	open: boolean;
	onClose: () => void;
}

const columns: GridColDef<Commets>[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'total_line', headerName: 'Product name', flex: 1, minWidth: 100 },
	{ field: 'quantity', headerName: 'User name', flex: 1, minWidth: 100 },
	{ field: 'total_line_currency', headerName: 'Description', flex: 1, minWidth: 100 },
	{ field: 'product', headerName: 'Qualification', flex: 1, minWidth: 100 },
	{ field: 'shoppingcart', headerName: 'Product', flex: 1, minWidth: 100 },
];

export const ListCustomerFavoritesWidget: FC<Props> = (props) => {
	const { shoppingCartId, open, onClose } = props;
	const { favoritesbyuser, isFetching } =  useFavoritessByUser(shoppingCartId);

	return (
		<>
			<ModalUIWidget
				open={open}
				onCancel={onClose}
				title="Favorites by Customer"
				disabledButtons
			>
				<Grid container rowGap={4}>
					<Grid item xs={12}>
						<Grid item xs={12}>
							<DataGridWidget 
								columns={columns}
								rows={isFetching ? [] : favoritesbyuser}
								pageSize={10}
							/>
						</Grid>
					</Grid>
				</Grid>
			</ModalUIWidget>
		</>
	);
};
