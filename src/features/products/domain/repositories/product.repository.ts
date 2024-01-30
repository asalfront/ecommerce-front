import { ProductForm, ProductResponse, ProductListResponse, CommetsListResponse } from '@/features/products/domain/entities';

export interface ProductRepository {
	createProduct(_product: ProductForm): Promise<ProductResponse>;
	getProducts(): Promise<ProductListResponse>;	
	getProduct(_id: number): Promise<ProductResponse>;
	updateProduct(_id: number, _product: ProductForm): Promise<ProductResponse>;
	deleteProduct(_id: number): Promise<ProductResponse>;
	uploadPhoto(_id: number, _photo: File): Promise<ProductResponse>;
	deletePhoto(_id: number): Promise<ProductResponse>;
	getCommets(_id: number): Promise<CommetsListResponse>;
}
