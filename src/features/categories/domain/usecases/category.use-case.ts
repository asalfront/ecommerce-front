import { inject, injectable } from 'inversify';

import type { CategoryRepository } from '../repositories/category.repository';
import { Category, CategoryFull } from '@/features/categories/domain/entities';
import { AppResponse } from '@/core/domain/entities/response/';
import TYPES from '@/core/hooks/di/di.types';

export interface ICategory {
	createCategory(_category: Category): Promise<AppResponse<Category>>;
	getCategories(): Promise<AppResponse<Category[]>>;
	updateCategory(_id: number, _category: Category): Promise<AppResponse<Category>>;
	deleteCategory(_id: number): Promise<AppResponse<Category>>;
	getCategory(_id: number): Promise<AppResponse<CategoryFull>>;
}

@injectable()
export class CategoryUseCase implements ICategory {
	private categoryRepository: CategoryRepository;

	constructor(@inject(TYPES.CategoryRepository) categoryRepository: CategoryRepository) {
		this.categoryRepository = categoryRepository;
	}
	async createCategory(category: Category): Promise<AppResponse<Category>> {
		return await this.categoryRepository.createCategory(category);
	}
	async getCategories(): Promise<AppResponse<Category[]>> {
		return await this.categoryRepository.getCategories();
	}
	async updateCategory(id: number, category: Category): Promise<AppResponse<Category>> {
		return await this.categoryRepository.updateCategory(id, category);
	}
	async deleteCategory(id: number): Promise<AppResponse<Category>> {
		return await this.categoryRepository.deleteCategory(id);
	}
	async getCategory(id: number): Promise<AppResponse<CategoryFull>> {
		return await this.categoryRepository.getCategory(id);
	}
}
