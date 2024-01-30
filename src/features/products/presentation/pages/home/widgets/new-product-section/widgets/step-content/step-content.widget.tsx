import { useProductContext } from '@/features/products/presentation/pages/home/hooks';
import { ProductDetailWidget, ProductImageWidget } from '..';


export const StepContentWidget = () => {

	const { step } =  useProductContext();
	
	if (step === 0) return <ProductDetailWidget />;
	if (step === 1) return <ProductImageWidget />;
	return null;
	
};
