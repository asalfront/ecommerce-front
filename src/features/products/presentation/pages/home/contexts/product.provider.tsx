import { FC, useReducer } from 'react';

import { productReducer } from './product.reducer';
import { ProductContext } from '.';
import { ProductState, ProductTypes } from './product.config';
import { Product } from '@/features/products/domain/entities';
import { di, useAuth, useSnackbar } from '@/core/hooks';
import { ProductUseCase } from '@/features/products/domain/usecases';
import { useQuery } from '@tanstack/react-query';

interface Props {
	children: JSX.Element | JSX.Element[];
	id?: number;
}

const initialProductState: ProductState = {
	productModal: false,
	step: 0,
	productId: undefined,
};

export const ProductProvider: FC<Props> = ({ children, id }) => {
	const [state, dispatch] = useReducer(productReducer, {
		...initialProductState,
		productId: id,
	});

	const { authenticated } = useAuth();
	const productUseCase = di().resolve(ProductUseCase);
	const { showError } = useSnackbar();

	const { data } = useQuery(['product', authenticated.id, state.productId], 
		() => productUseCase.getProduct(id ?? state.productId ?? 0), {
			onSuccess: (r) => { 
				if (r.type === 'error') {
					showError(r);
					return;
				}			
			},
			staleTime: Infinity,
			enabled: authenticated.firstName !== '' && state.productId !== undefined && state.productModal,
		});

	const product = data?.data;

	const onStepChange = (step: number) => {
		dispatch({
			type: ProductTypes.on_step_change,
			payload: {
				step,
			}
		});
	};

	const onCloseProductModal = () => {
		dispatch({
			type: ProductTypes.on_close_product_modal,
			payload: {
				productModal: false,
				step: 0,
				productId: id ?? undefined,
			}
		});
	};

	const onOpenProductModal = () => {
		dispatch({
			type: ProductTypes.on_open_product_modal,
		});
	};

	const onCreateProduct = (product: Product) => {
		dispatch({
			type: ProductTypes.on_create_product,
			payload: {
				step: 1,
				productId:  product.id,
			}
		});
	};

	return (
		<ProductContext.Provider 
			value={{
				...state,
				product,
				onStepChange,
				onCloseProductModal,
				onOpenProductModal,
				onCreateProduct
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
