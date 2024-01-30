import { inject, injectable } from 'inversify';

import type { ProductRepository } from '@/features/products/domain/repositories';
import { CommetsListResponse, ProductForm, ProductListResponse, ProductResponse } from '@/features/products/domain/entities';
import TYPES from '@/core/hooks/di/di.types';

export interface IProduct {
	createProduct(product: ProductForm): Promise<ProductResponse>;
	getProducts(): Promise<ProductListResponse>;
	getProduct(id: number): Promise<ProductResponse>;
	updateProduct(id: number, product: ProductForm): Promise<ProductResponse>;
	deleteProduct(id: number): Promise<ProductResponse>;
	uploadPhoto(id: number, photo: File): Promise<ProductResponse>;
	deletePhoto(id: number): Promise<ProductResponse>;
}

@injectable()
export class ProductUseCase implements IProduct {
	private productRepository: ProductRepository;

	constructor(@inject(TYPES.ProductRepository) productRepository: ProductRepository) {
		this.productRepository = productRepository;
	}
	async createProduct(product: ProductForm): Promise<ProductResponse> {
		return await this.productRepository.createProduct(product);
	}
	async getProducts(): Promise<ProductListResponse> {
		return await this.productRepository.getProducts();
	}
	async getProduct(id: number): Promise<ProductResponse> {
		return await this.productRepository.getProduct(id);
	}
	async updateProduct(id: number, product: ProductForm): Promise<ProductResponse> {
		return await this.productRepository.updateProduct(id, product);
	}
	async deleteProduct(id: number): Promise<ProductResponse> {
		return await this.productRepository.deleteProduct(id);
	}
	async uploadPhoto(id: number, photo: File): Promise<ProductResponse> {
		return await this.productRepository.uploadPhoto(id, photo);
	}
	async deletePhoto(id: number): Promise<ProductResponse> {
		return await this.productRepository.deletePhoto(id);
	}
	async getCommets(id: number): Promise<CommetsListResponse> {
		return await this.productRepository.getCommets(id);
	}
}
