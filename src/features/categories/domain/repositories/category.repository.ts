import { AppResponse } from '@/core/domain/entities/response/';
import { Category, CategoryFull } from '@/features/categories/domain/entities';

export interface CategoryRepository {
	createCategory(_category: Category): Promise<AppResponse<Category>>;
	getCategories(): Promise<AppResponse<Category[]>>;
	updateCategory(_id: number, _category: Category): Promise<AppResponse<Category>>;
	deleteCategory(_id: number): Promise<AppResponse<Category>>;
	getCategory(_id: number): Promise<AppResponse<CategoryFull>>;
}
