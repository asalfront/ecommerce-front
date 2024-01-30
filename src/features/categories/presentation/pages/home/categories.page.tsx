import { Divider, Grid, Typography } from '@mui/material';

import { ButtonWidget, DataGridWidget } from '@/core/widgets';
import { categoriesSectionStyles } from './categories.styles';
import { useState } from 'react';
import { AddCategoryWidget, DataGridCategoryActions } from './widgets';
import { useCategories } from './hooks';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'name', headerName: 'Name', flex: 1, minWidth: 100 },
	{ field: 'description', headerName: 'Description', flex: 1, minWidth: 100 },
	{ field: 'actions', headerName: '', flex: 0.3, minWidth: 150,
		renderCell: (params) => (<DataGridCategoryActions category={params.row} />)
	},
];

const CategoriesPage = () => {

	const [openCreateCategory, setOpenCreateCategory] = useState(false);
	const { categories } = useCategories();

	return (
		<>
			<Grid container sx={categoriesSectionStyles} rowGap={4}>
				<Grid item xs={12}>
					<Typography variant="h1">Categories</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid container item xs={12} rowGap={4} columnSpacing={4} alignItems="flex-start">
					<Grid item xs={4} xl={3}>
						<ButtonWidget
							label="Add new category"
							type="tertiary"
							onClick={() => setOpenCreateCategory(true)}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<DataGridWidget 
						columns={columns}
						rows={categories}
						pageSize={10}
					/>
				</Grid>
				<AddCategoryWidget open={openCreateCategory} onClose={() => setOpenCreateCategory(false)} />
			</Grid>
		</>
	);
};

export default CategoriesPage;
