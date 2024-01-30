import { Divider, Grid, Typography } from '@mui/material';

import { ButtonWidget, DataGridWidget } from '@/core/widgets';
import { customersSectionStyles } from './customers.styles';
import { useState } from 'react';
import { AddCustomerWidget, DataGridCustomerActions } from './widgets';
import { useCustomers } from './hooks';
import { GridColDef } from '@mui/x-data-grid';
import { Customer } from '@/features/customers/domain/entities';

const columns: GridColDef<Customer>[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'first_name', headerName: 'First name', flex: 1, minWidth: 100 },
	{ field: 'last_name', headerName: 'Last name', flex: 1, minWidth: 100 },
	{ field: 'email', headerName: 'Email', flex: 1, minWidth: 100 },
	{ field: 'billing_address', headerName: 'Billing address', flex: 1, minWidth: 100 },
	{ field: 'shipping_address', headerName: 'Shipping address', flex: 1, minWidth: 100 },
	{ field: 'actions', headerName: '', flex: 0.3, minWidth: 150, 
		renderCell: (params) => (<DataGridCustomerActions customer={params.row} />) },
];

const CustomersPage = () => {

	const [openCreateCustomer, setOpenCreateCustomer] = useState(false);
	const { customers } = useCustomers();

	return (
		<>
			<Grid container sx={customersSectionStyles} rowGap={4}>
				<Grid item xs={12}>
					<Typography variant="h1">Customers</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid container item xs={12} rowGap={4} columnSpacing={4} alignItems="flex-start">
					<Grid item xs={4} xl={3}>
						<ButtonWidget
							label="Add new customer"
							type="tertiary"
							onClick={() => setOpenCreateCustomer(true)}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<DataGridWidget 
						columns={columns}
						rows={customers}
						pageSize={10}
					/>
				</Grid>
				<AddCustomerWidget open={openCreateCustomer} onClose={() => setOpenCreateCustomer(false)} />
			</Grid>
		</>
	);
};

export default CustomersPage;
