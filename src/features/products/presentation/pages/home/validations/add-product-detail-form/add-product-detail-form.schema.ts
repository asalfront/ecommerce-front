import * as Yup from 'yup';

import { addProductDetailModel } from './add-product-detail-form.model';

const {
	formField: {
		code,
		name,
		description,
		price,
		top,
		featured,
		categories
	}
} = addProductDetailModel;

export const addProductDetailValidation = Yup.object().shape({
	[code.name]: Yup.string().required(code.requiredErrorMsg),
	[name.name]: Yup.string().required(name.requiredErrorMsg),
	[description.name]: Yup.string().required(description.requiredErrorMsg),
	[price.name]: Yup.number().required(price.requiredErrorMsg),
	[top.name]: Yup.boolean().required(top.requiredErrorMsg),
	[featured.name]: Yup.boolean().required(featured.requiredErrorMsg),
	[categories.name]: Yup.array().required(categories.requiredErrorMsg).min(1, categories.requiredErrorMsg),
});
