import * as Yup from 'yup';

import { addCategoryModel } from './add-category-form.model';

const {
	formField: {
		name,
		description,
		sons,
	}
} = addCategoryModel;

export const addCustomerValidation = Yup.object().shape({
	[name.name]: Yup.string().required(name.requiredErrorMsg),
	[description.name]: Yup.string().required(description.requiredErrorMsg),
	//number array 
	[sons.name]: Yup.array().of(Yup.number()).required(sons.requiredErrorMsg),
});
