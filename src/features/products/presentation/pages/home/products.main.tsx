import { ProductProvider } from './contexts';
import ProductsPage from './products.page';


const ProductsMain = () => {
	return (	
		<ProductProvider>
			<ProductsPage />
		</ProductProvider>
	);
};

export default ProductsMain;
