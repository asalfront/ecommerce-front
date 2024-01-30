import { injectable } from 'inversify';

import AppDataSource from '@/core/network/app.datasource';
import { AppResponse } from '@/core/domain/entities/response/app.response';
import { Category, CategoryFull } from '@/features/categories/domain/entities';
import { Data } from '@/core/domain/entities/response/data';

@injectable()
export class CategoryDataSource extends AppDataSource {
	async createCategory(category: Category): Promise<AppResponse<Category>> {
		try {
			const r = await this.httpCLient.post<Category>('/categories/', category);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getCategories(): Promise<AppResponse<Category[]>> {
		try {
			const r = await this.httpCLient
				.get<Category[]>('/categories/');
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async updateCategory(categoryId: number, category: Category): Promise<AppResponse> {
		try {
			const r = await this.httpCLient.patch<Data>(`/categories/${categoryId}/`, category);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async getCategory(categoryId: number): Promise<AppResponse<CategoryFull>> {
		try {
			const r = await this.httpCLient.get<CategoryFull>(`/categories/${categoryId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}

	async deleteCategory(categoryId: number): Promise<AppResponse> {
		try {
			const r = await this.httpCLient.delete<Data>(`/categories/${categoryId}/`);
			return this.getResponse(r);
		} catch (e) {
			return this.getFailure(e);
		}
	}
}
