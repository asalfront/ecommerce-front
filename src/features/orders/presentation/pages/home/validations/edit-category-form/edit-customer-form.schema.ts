import * as Yup from 'yup';

import { editCategoryModel } from './edit-category-form.model';

const {
	formField: {
		name,
		description,
		sons,
	}
} = editCategoryModel;

export const editCustomerValidation = Yup.object().shape({
	[name.name]: Yup.string().required(name.requiredErrorMsg),
	[description.name]: Yup.string().required(description.requiredErrorMsg),
	[sons.name]: Yup.array().of(Yup.number()).required(sons.requiredErrorMsg),
});
