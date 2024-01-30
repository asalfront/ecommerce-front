import { ProductForm } from '@/features/products/domain/entities';

export const productFormToPostAdapter = (productForm: ProductForm): ProductForm => {
	return {
		name: productForm.name,
		description: productForm.description,
		price: productForm.price,
		code: productForm.code,
		top: productForm.top,
		featured: productForm.featured,
		categories: productForm.categories,
		discount: productForm.discount,
	};
};

// export const functionalityEditFormToPostAdapter = (projectId: string, functionalityForm: FunctionalityForm): Functionality => {
// 	return {
// 		projectId: parseInt(projectId),
// 		name: functionalityForm.functionalityName,
// 		description: functionalityForm.descriptionName,
// 		actorIds: functionalityForm.actorIds.filter((actorId) => actorId !== 'none').map((actorId) => parseInt(actorId)),
// 		priorityId: parseInt(functionalityForm.priorityId),
// 		mandatory: functionalityForm.mandatory === '1' ? 1 : 0,
// 	};
// };
