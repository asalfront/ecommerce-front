import { Product } from '@/features/products/domain/entities';

export interface ProductContextProps {
	step: number;
	productModal: boolean;
	product?: Product;
	productId?: number;
	onCloseProductModal: () => void;
	onOpenProductModal: () => void;
	onStepChange: (tab: number) => void;
	onCreateProduct: (product: Product) => void;
}

export interface ProductState {
	step: number;
	productId?: number;
	productModal: boolean;
}

export enum ProductTypes {
	on_step_change = 'on_step_change',
	on_create_product = 'on_create_product',
	on_open_product_modal = 'on_open_product_modal',
	on_close_product_modal = 'on_close_product_modal',
}

export type ProductAction = 
	| { type: ProductTypes.on_step_change, payload: { step: number } }
	| { type: ProductTypes.on_create_product, payload: { step: number, productId: number } }
	| { type: ProductTypes.on_open_product_modal }
	| { type: ProductTypes.on_close_product_modal, payload: { step: number, productId: number | undefined, productModal: boolean } };
