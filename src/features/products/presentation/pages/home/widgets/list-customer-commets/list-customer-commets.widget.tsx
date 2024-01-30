import { FC } from 'react';
import { Grid } from '@mui/material';
import { DataGridWidget, ModalUIWidget } from '@/core/widgets';
import { Commets } from '@/features/products/domain/entities';
import { GridColDef } from '@mui/x-data-grid';
import { useCommetsByProduct } from '../../hooks/get-commets.hook';

interface Props {
	id: number;
	open: boolean;
	onClose: () => void;
}

const columns: GridColDef<Commets>[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'product_name', headerName: 'Product name', flex: 1, minWidth: 100 },
	{ field: 'user_name', headerName: 'User name', flex: 1, minWidth: 100 },
	{ field: 'description', headerName: 'Description', flex: 1, minWidth: 100 },
	{ field: 'qualification', headerName: 'Qualification', flex: 1, minWidth: 100 },
	{ field: 'product', headerName: 'Product', flex: 1, minWidth: 100 },
	{ field: 'user', headerName: 'User', flex: 1, minWidth: 100 },
];

export const ListCustomerCommetsWidget: FC<Props> = (props) => {
	const { id, open, onClose } = props;
	const { commetsbyproduct, isFetching } = useCommetsByProduct(id);

	return (
		<>
			<ModalUIWidget
				open={open}
				onCancel={onClose}
				title="Commets by Product"
				disabledButtons
			>
				<Grid container rowGap={4}>
					<Grid item xs={12}>
						<Grid item xs={12}>
							<DataGridWidget 
								columns={columns}
								rows={isFetching ? [] : commetsbyproduct}
								pageSize={10}
							/>
						</Grid>
					</Grid>
				</Grid>
			</ModalUIWidget>
		</>
	);
};
