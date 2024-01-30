import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { addProductDetailValidation } from '@/features/products/presentation/pages/home/validations';
import { ProductForm } from '@/features/products/domain/entities';
import { ProductUseCase } from '@/features/products/domain/usecases';
import { CategoryUseCase } from '@/features/categories/domain/usecases';
import { categoriesToSelectAdapter, productFormToPostAdapter } from '@/features/products/presentation/pages/home/adapter';
import { useProductContext } from './product-context.hook';
import { FormHelper } from '@/core/helpers';
import { useEffect } from 'react';

export const useCreateProductDetail = () => {

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();
	const { onCreateProduct, onStepChange, product, productId } = useProductContext();

	const initialProductForm: ProductForm = {
		name: product?.name ?? '',
		description: product?.description ?? '',
		price: product?.price ?? undefined as never,
		code: product?.code ?? '',
		categories: product?.categories.map((category) => category.toString()) ?? [],
		top: product?.top ?? false,
		featured: product?.featured ?? false,
		discount: product?.discount ?? 0,
	};

	const { control, handleSubmit	, reset } = useForm<ProductForm>({
		resolver: yupResolver(addProductDetailValidation),
		defaultValues: initialProductForm,
	});


	const queryClient = useQueryClient();
	const productUseCase = di().resolve(ProductUseCase);
	const categoryUseCase = di().resolve(CategoryUseCase);

	const { data } = useQuery(['categories', authenticated.id], () => categoryUseCase.getCategories());

	useEffect(() => {
		if (product?.id) {
			reset(initialProductForm);
		}
	}, [product?.id]);

	const createProductDetailMutation = useMutation(['create-product', authenticated.id], 
		(productForm: ProductForm) => productUseCase.createProduct(productForm));

	const updateProductDetailMutation = useMutation(['update-product', authenticated.id],
		(productForm: ProductForm) => productUseCase.updateProduct(product?.id ?? 0, productForm), {
			onSuccess: (data) => {
				if (data.type === 'error') {
					showError(data);
					return;
				}
				queryClient.invalidateQueries(['product', authenticated.id, productId], { exact: true });
				queryClient.invalidateQueries(['products', authenticated.id]);
			}
		}
	);

	useLoading([createProductDetailMutation.isLoading]);

	const categories = categoriesToSelectAdapter(data?.data ?? []);

	const onCreateProductDetail = () => {
		handleSubmit((productForm) => {
			const productToSend = productFormToPostAdapter(productForm);
			
			if (productId) {
				const payload = FormHelper.cleanDataToBeSaved(productToSend, initialProductForm);	
				if (!FormHelper.isEmpty(payload)) {
					updateProductDetailMutation.mutate(payload);
				}

				onStepChange(1);
				return;
			}

			createProductDetailMutation.mutate(productToSend, {
				onSuccess: (data) => {
					reset();
					if (data.type === 'error') {
						showError(data);
						return;
					}
					queryClient.invalidateQueries(['products', authenticated.id]);
					onCreateProduct(data.data);
				}
			});
		})();
	};

	return {
		control,
		onCreateProductDetail,
		categories,
		reset,
	};
};
