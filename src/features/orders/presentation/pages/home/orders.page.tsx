import { Divider, Grid, Typography } from '@mui/material';

import { ButtonWidget, DataGridWidget } from '@/core/widgets';
import { ordersSectionStyles } from './orders.styles';
import { useState } from 'react';
import { DataGridCategoryActions } from './widgets';
import { useOrders } from './hooks';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'status', headerName: 'Status', flex: 1, minWidth: 100 },
	{ field: 'total', headerName: 'Total', flex: 1, minWidth: 100 },
	{ field: 'total_currency', headerName: 'Total Currency', flex: 1, minWidth: 100 },
	{ field: 'user', headerName: 'User ID', flex: 1, minWidth: 100 },
	// { field: 'actions', headerName: '', flex: 0.3, minWidth: 150,
	// 	renderCell: (params) => (<DataGridCategoryActions category={params.row} />)
	// },
];

const OrdersPage = () => {

	const [openCreateCategory, setOpenCreateCategory] = useState(false);
	const { orders } = useOrders();

	return (
		<>
			<Grid container sx={ordersSectionStyles} rowGap={4}>
				<Grid item xs={12}>
					<Typography variant="h1">Orders</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid container item xs={12} rowGap={4} columnSpacing={4} alignItems="flex-start">
				</Grid>
				<Grid item xs={12}>
					<DataGridWidget 
						columns={columns}
						rows={orders}
						pageSize={10}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default OrdersPage;
