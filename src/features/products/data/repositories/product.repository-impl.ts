import { inject, injectable } from 'inversify';

import TYPES from '@/core/hooks/di/di.types';
import { ProductForm, ProductResponse, ProductListResponse, CommetsListResponse } from '@/features/products/domain/entities';
import { ProductRepository } from '@/features/products/domain/repositories';
import { ProductDataSource } from '@/features/products/data/datasources';

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
	private productDataSource: ProductDataSource;

	constructor(@inject(TYPES.ProductDataSource) productDataSource: ProductDataSource) {
		this.productDataSource = productDataSource;
	}
	async createProduct(product: ProductForm): Promise<ProductResponse> {
		return await this.productDataSource.createProduct(product);
	}
	async getProducts(): Promise<ProductListResponse> {
		return await this.productDataSource.getProducts();
	}
	async getProduct(id: number): Promise<ProductResponse> {
		return await this.productDataSource.getProduct(id);
	}
	async updateProduct(id: number, product: ProductForm): Promise<ProductResponse> {
		return await this.productDataSource.updateProduct(id, product);
	}
	async deleteProduct(id: number): Promise<ProductResponse> {
		return await this.productDataSource.deleteProduct(id);
	}
	async uploadPhoto(id: number, photo: File): Promise<ProductResponse> {
		return await this.productDataSource.uploadPhoto(id, photo);
	}
	async deletePhoto(id: number): Promise<ProductResponse> {
		return await this.productDataSource.deletePhoto(id);
	}
	async getCommets(id: number): Promise<CommetsListResponse> {
		return await this.productDataSource.getCommets(id);
	}
}
