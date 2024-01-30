import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar, useDialog } from '@/core/hooks';
import { Category } from '@/features/categories/domain/entities';
import { addCustomerValidation } from '@/features/categories/presentation/pages/home/validations';
import { CategoryUseCase } from '@/features/categories/domain/usecases';
import { categoriesToSelectAdapter } from '../adapter/category.adapter';

export const useCreateCategory = () => {

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();
	const { showSuccessDialog } = useDialog();

	const { control, handleSubmit, reset } = useForm<Category>({
		resolver: yupResolver(addCustomerValidation),
		defaultValues: {
			subcategories: [],
		}
	});

	const queryClient = useQueryClient();
	const cateryUseCase = di().resolve(CategoryUseCase);

	const createCategoryMutation = useMutation(['create-category', authenticated.id], 
		(category: Category) => cateryUseCase.createCategory(category));

	const { data } = useQuery(['categories', authenticated.id], () => cateryUseCase.getCategories());

	const categories = categoriesToSelectAdapter(data?.data ?? []);

	useLoading([createCategoryMutation.isLoading]);

	const createCategory = (onClose: () => void) => {
		handleSubmit((category: Category) => {
			createCategoryMutation.mutate(category, {
				onSuccess: (data) => {
					reset();
					if (data.type === 'error') {
						showError(data);
						return;
					}
					onClose();
					showSuccessDialog({
						title: 'Ok!',
						content: 'This category has been successfully registered.',
						cancelText: 'Close',
					});
					queryClient.invalidateQueries(['categories', authenticated.id]);
				}
			});
		})();
	};

	return {
		control,
		createCategory,
		categories,
		reset,
	};
};
