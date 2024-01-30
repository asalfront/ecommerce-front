import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { CategoryUseCase } from '@/features/categories/domain/usecases';
import { Category, CategoryFull } from '@/features/categories/domain/entities';
import { editCustomerValidation } from '@/features/categories/presentation/pages/home/validations/';
import { FormHelper } from '@/core/helpers';
import { AppResponse } from '@/core/domain/entities/response/';
import { categoriesToSelectAdapter } from '../adapter/category.adapter';

const initialCategory: Category = {
	id: 0,
	name: '',
	description: '',
	subcategories: [],
};

export const useEditCategory = (id: number) => {
	const categoryUseCase = di().resolve(CategoryUseCase);

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();

	const queryClient = useQueryClient();

	const dataFromCache = queryClient.getQueryData(['category', authenticated.id, id]) as AppResponse<CategoryFull>;

	const { control, handleSubmit, reset } = useForm<Category>({
		resolver: yupResolver(editCustomerValidation),
		defaultValues: {
			id: dataFromCache?.data?.id ?? initialCategory.id,
			name: dataFromCache?.data?.name ?? initialCategory.name,
			description: dataFromCache?.data?.description ?? initialCategory.description,
			subcategories: dataFromCache?.data?.subcategories.map((s) => s.id) ?? initialCategory.subcategories,
		}
	});

	const { data, isFetching } = useQuery(['category', authenticated.id, id],
		() => categoryUseCase.getCategory(id), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
				reset({
					id: r.data?.id ?? initialCategory.id,
					name: r.data?.name ?? initialCategory.name,
					description: r.data?.description ?? initialCategory.description,
					subcategories: r.data?.subcategories.map((s) => s.id) ?? initialCategory.subcategories,
				});
			},
			staleTime: Infinity,
		},
	);

	const updateCategoryMutation = useMutation(['update-category', authenticated.id],
		(_category: Category) => categoryUseCase.updateCategory(id, _category));


	const { data: categoriesData } = useQuery(['categories', authenticated.id], () => categoryUseCase.getCategories());

	const categories = categoriesToSelectAdapter(categoriesData?.data ?? []);

	const { closeLoading } = useLoading([isFetching, updateCategoryMutation.isLoading]);

	const category = data?.data ? {
		...data.data,
		subcategories: data.data.subcategories.map((s) => s.id),
	} : initialCategory;



	const onUpdateCategory =  async (onClose: () => void) => {
		await handleSubmit((categoryForm: Category) => {
			const payload = FormHelper.cleanDataToBeSaved(categoryForm, category);

			if (FormHelper.isEmpty(payload)) {
				onClose();
				return;
			}
			
			updateCategoryMutation.mutate(payload, {
				onSuccess: (r) => {
					if (r.type === 'error') {
						showError(r);
						return;
					}
					onClose();
					closeLoading();
					queryClient.invalidateQueries(['category', authenticated.id, id]);
					queryClient.invalidateQueries(['categories', authenticated.id]);
				}
			});
		})();
	};

	const onCancel = (onClose: () => void) => {
		onClose();
	};

	return {
		control,
		onUpdateCategory,
		onCancel,
		categories,
	};
};
