import { useQuery } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { ProductUseCase } from '@/features/products/domain/usecases';

export const useProducts = () => {
	const { authenticated } = useAuth();
	const { showError } = useSnackbar(); 
	const productUseCase = di().resolve(ProductUseCase);

	const { data, isFetching } = useQuery(['products', authenticated.id],
		() => productUseCase.getProducts(), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			enabled: authenticated.firstName !== '',
			staleTime: Infinity,
		});

	const products = data?.data ?? [];

	useLoading([isFetching]);

	return {
		products,
	};
};
