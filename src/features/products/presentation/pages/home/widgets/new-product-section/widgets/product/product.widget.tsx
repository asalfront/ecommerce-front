import { Dialog } from '@mui/material';

import { dialogContainerStyles } from './product.styles';
import { StepContentWidget, StepHeaderWidget } from '@/features/products/presentation/pages/home/widgets/new-product-section/widgets';
import { useProductContext } from '../../../../hooks/product-context.hook';

export const ProductWidget = () => {
	const { productModal, onCloseProductModal } = useProductContext();

	return (
		<>
			<Dialog
				fullWidth={true}
				open={productModal}
				onClose={onCloseProductModal}
				PaperProps={{
					sx: dialogContainerStyles
				}}		
			>
				<StepHeaderWidget />
				<StepContentWidget />
			</Dialog>
		</>
	);
};
