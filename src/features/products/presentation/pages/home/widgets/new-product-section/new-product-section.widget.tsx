import { Grid } from '@mui/material';

import { ButtonWidget } from '@/core/widgets';
import { ProductProvider } from '@/features/products/presentation/pages/home/contexts';
import { ProductWidget } from '@/features/products/presentation/pages/home/widgets/new-product-section/widgets';
import { useProductContext } from '@/features/products/presentation/pages/home/hooks';

const NewProductContent = () => {
	const { onOpenProductModal } = useProductContext();
	return (
		<>
			<Grid item xs={4} xl={3}>
				<ButtonWidget
					label="Add new product"
					type="tertiary"
					onClick={onOpenProductModal}
				/>
			</Grid>
			<ProductWidget />
		</>
	);
};


export const NewProductSection = () => {
	return (
		<ProductProvider>
			<NewProductContent />
		</ProductProvider>
	);
};
