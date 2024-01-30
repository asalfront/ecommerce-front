import { useState } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { ButtonWidget, DataGridWidget } from '@/core/widgets';
import { usersSectionStyles } from './users.styles';
import { AddUserWidget, DataGridUserActions } from './widgets';
import { useUsers } from '@/features/users/presentation/pages/home/hooks/';
import { User } from '@/features/users/domain/entities';

const columns: GridColDef<User>[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'first_name', headerName: 'First name', flex: 1, minWidth: 100 },
	{ field: 'last_name', headerName: 'Last name', flex: 1, minWidth: 100 },
	{ field: 'email', headerName: 'Email', flex: 1, minWidth: 100 },
	{ field: 'last_login', headerName: 'Last login', flex: 1, minWidth: 100 },
	{ field: 'role', headerName: 'Role', flex: 1, minWidth: 100 },
	{ field: 'actions', headerName: '', flex: 0.3, minWidth: 150, 
		renderCell: (params) => (<DataGridUserActions user={params.row} />) },
];

const UsersPage = () => {

	const [openCreateUser, setOpenCreateUser] = useState(false);
	const { users } = useUsers();

	return (
		<>
			<Grid container sx={usersSectionStyles} rowGap={4}>
				<Grid item xs={12}>
					<Typography variant="h1">Users</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid container item xs={12} rowGap={4} columnSpacing={4} alignItems="flex-start">
					<Grid item xs={4} xl={3}>
						<ButtonWidget
							label="Add new user"
							type="tertiary"
							onClick={() => setOpenCreateUser(true)}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<DataGridWidget 
						columns={columns}
						rows={users}
						pageSize={10}
					/>
				</Grid>
				<AddUserWidget open={openCreateUser} onClose={() => setOpenCreateUser(false)} />
			</Grid>
		</>
	);
};

export default UsersPage;
