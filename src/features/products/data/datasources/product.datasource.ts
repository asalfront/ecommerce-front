import { injectable } from 'inversify';

import AppDataSource from '@/core/network/app.datasource';
import { ProductListResponse, ProductResponse, ProductForm, Commets, CommetsListResponse } from '@/features/products/domain/entities';
import { serialize } from 'object-to-formdata';


@injectable()
export class ProductDataSource extends AppDataSource {
	async createProduct(product: ProductForm): Promise<ProductResponse> {
		try {
			const r = await this.httpCLient
				.post<ProductResponse>('/products/', product);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getProduct(id: number): Promise<ProductResponse> {
		try {
			const r = await this.httpCLient
				.get<ProductResponse>(`/products/${id}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getProducts(): Promise<ProductListResponse> {
		try {
			const r = await this.httpCLient
				.get<ProductListResponse>('/products/');
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async updateProduct(id: number, product: ProductForm): Promise<ProductResponse> {
		try {
			const r = await this.httpCLient
				.put<ProductResponse>(`/products/${id}/`, product);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async deleteProduct(id: number): Promise<ProductResponse> {
		try {
			const r = await this.httpCLient
				.delete<ProductResponse>(`/products/${id}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async uploadPhoto(id: number, photo: File): Promise<ProductResponse> {
		try {
			const formData = serialize({
				image: photo,
				product: id
			});
			const { data } = await this.httpCLient.post<ProductResponse>('/products/images/', formData);
			return data;
		} catch (e) {
			return this.getError(e);
		}
	}

	async deletePhoto(id: number): Promise<ProductResponse> {
		try {
			const r = await this.httpCLient
				.delete<ProductResponse>(`/products/images/${id}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
	async getCommets(productId: number): Promise<CommetsListResponse> {
		try {
			const r = await this.httpCLient.get<Commets>(`/comments/${productId}/products/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
}
