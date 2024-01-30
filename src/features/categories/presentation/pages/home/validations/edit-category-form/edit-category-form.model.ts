export const editCategoryModel = {
	formId: 'editCategoryForm',
	formField: {
		name: {
			name: 'name',
			label: 'Name',
			placeholder: 'Name',
			requiredErrorMsg: 'Name is required',
		},
		description: {
			name: 'description',
			label: 'Description',
			placeholder: 'Description',
			requiredErrorMsg: 'Description is required',
		},
		sons: {
			name: 'subcategories',
			label: 'Subcategories',
			placeholder: 'Subcategories',
			requiredErrorMsg: 'Subcategories is required',
		},
	}
};
