import { Image } from './image';

export interface Product {
	id: number;
	categories_name: string[];
	images: Image[];
	code: string;
	name: string;
	description: string;
	price: number;
	discount: number;
	top: boolean;
	featured: boolean;
	categories: number[];
}

export type ProductForm = Omit<Product, 'id' | 'categories_name' | 'images' | 'categories'> & {
	categories: string[];
};


export interface Commets {
	id: number;
	product_name: string;
	user_name: string;
	description: string;
	qualification: number;
	product: number;
	user: number;
}

export interface ProductCommetsForm {
	id: number;
	product_name: string;
	user_name: string;
	description: string;
	qualification: number;
	product: number;
	user: number;
}

export type ProductResponse = AppResponse<Product>;
export type ProductListResponse = AppResponse<Product[]>;
export type CommetsListResponse = AppResponse<Commets[]>;
