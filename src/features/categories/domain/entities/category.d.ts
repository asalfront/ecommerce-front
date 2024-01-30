export interface Category {
	description: string;
	name: string;
	id: number;
	subcategories: number[];
}

export interface CategoryForm {
	description: string;
	name: string;
	subcategories: number[];
}

export interface CategoryFull {
	description: string;
	name: string;
	id: number;
	subcategories: Category[];
}

export type CategoryList = Category[];
