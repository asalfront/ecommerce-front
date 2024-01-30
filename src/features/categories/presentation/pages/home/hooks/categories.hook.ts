import { useQuery } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { CategoryUseCase } from '@/features/categories/domain/usecases';

export const useCategories = () => {
	const { authenticated } = useAuth();
	const { showError } = useSnackbar(); 
	const categoryUseCase = di().resolve(CategoryUseCase);

	const { data, isFetching } = useQuery(['categories', authenticated.id],
		() => categoryUseCase.getCategories(),{
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			enabled: authenticated.firstName !== '',
			staleTime: Infinity,
		});

	const categories = data?.data ?? [];

	useLoading([isFetching]);

	return {
		categories,
	};
};
