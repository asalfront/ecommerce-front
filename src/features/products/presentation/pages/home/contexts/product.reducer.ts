import { ProductAction, ProductState, ProductTypes } from './product.config';


export const productReducer = (state: ProductState, action: ProductAction) => {
	switch (action.type) {
		case ProductTypes.on_step_change:
			return { ...state, step: action.payload.step };
		case ProductTypes.on_create_product:
			return { ...state , step: action.payload.step, productId: action.payload.productId };
		case ProductTypes.on_open_product_modal:
			return { ...state, productModal: true };
		case ProductTypes.on_close_product_modal:
			return { ...state, step: action.payload.step, productId: action.payload.productId, productModal: action.payload.productModal };
		default:
			return {
				...state
			};
	}
};
