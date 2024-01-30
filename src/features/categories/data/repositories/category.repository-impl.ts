import { inject, injectable } from 'inversify';

import TYPES from '@/core/hooks/di/di.types';
import { AppResponse } from '@/core/domain/entities/response/';
import { CategoryDataSource } from '@/features/categories/data/datasources';
import { Category, CategoryFull } from '@/features/categories/domain/entities';
import { CategoryRepository } from '@/features/categories/domain/repositories';

@injectable()
export class CategoryRepositoryImpl implements CategoryRepository {
	private categoryDataSource: CategoryDataSource;

	constructor(@inject(TYPES.CategoryDataSource) categoryDataSource: CategoryDataSource) {
		this.categoryDataSource = categoryDataSource;
	}
	async createCategory(category: Category): Promise<AppResponse<Category>> {
		return await this.categoryDataSource.createCategory(category);
	}
	async getCategories(): Promise<AppResponse<Category[]>> {
		return await this.categoryDataSource.getCategories();
	}
	async updateCategory(id: number, category: Category): Promise<AppResponse<Category>> {
		return await this.categoryDataSource.updateCategory(id, category);
	}
	async deleteCategory(id: number): Promise<AppResponse<Category>> {
		return await this.categoryDataSource.deleteCategory(id);
	}
	async getCategory(id: number): Promise<AppResponse<CategoryFull>> {
		return await this.categoryDataSource.getCategory(id);
	}
}
