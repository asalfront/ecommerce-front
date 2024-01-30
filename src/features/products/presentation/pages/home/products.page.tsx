import { Divider, Grid, Typography } from '@mui/material';

import { DataGridWidget } from '@/core/widgets';
import { customersSectionStyles } from './products.styles';
import { DataGridProductActions, NewProductSection } from './widgets';
import { GridColDef } from '@mui/x-data-grid';
import { useProducts } from '@/features/products/presentation/pages/home/hooks';
import { Product } from '@/features/products/domain/entities';
import { ProductProvider } from './contexts';

const columns: GridColDef<Product>[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'name', headerName: 'First name', flex: 1, minWidth: 100 },
	{ field: 'price', headerName: 'Price', flex: 1, minWidth: 100, renderCell: (params) => (<span>${params.value}</span>) },
	{ field: 'categories_name', headerName: 'Categories', flex: 1, minWidth: 100, renderCell: (params) => (params.value.join(', ')) },
	{ field: 'actions', headerName: '', flex: 0.3, minWidth: 150, 
		renderCell: (params) => (
			<ProductProvider id={params.row.id}>
				<DataGridProductActions product={params.row} />
			</ProductProvider>
		) 
	},
];

const ProductsPage = () => {
	const { products } = useProducts();

	return (
		<>
			<Grid container sx={customersSectionStyles} rowGap={4}>
				<Grid item xs={12}>
					<Typography variant="h1">Products</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid container item xs={12} rowGap={4} columnSpacing={4} alignItems="flex-start">
					<NewProductSection />
				</Grid>
				<Grid item xs={12}>
					<DataGridWidget 
						columns={columns}
						rows={products}
						pageSize={10}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default ProductsPage;
