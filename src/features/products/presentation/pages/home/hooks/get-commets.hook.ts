import { useQuery } from '@tanstack/react-query';
import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { ProductUseCase } from '@/features/products/domain/usecases';

export const useCommetsByProduct = (id: number) => {
	const productUseCase = di().resolve(ProductUseCase);

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();

	const { data, isFetching  } = useQuery(['commets', authenticated.id, id],
		() => productUseCase.getCommets(id), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			staleTime: Infinity,
		},
	);

	const commetsbyproduct = data?.data.comments ?? [];
	
	useLoading([isFetching]);

	return {
		commetsbyproduct,
		isFetching
	};
};
