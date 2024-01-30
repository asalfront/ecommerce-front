import { useQuery } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { CategoryUseCase } from '@/features/categories/domain/usecases';
import { OrderUseCase } from '@/features/orders/domain/usecases';

export const useOrders = () => {
	const { authenticated } = useAuth();
	const { showError } = useSnackbar(); 
	const orderUseCase = di().resolve(OrderUseCase);

	const { data, isFetching } = useQuery(['orders', authenticated.id],
		() => orderUseCase.getOrders(),{
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			enabled: authenticated.firstName !== '',
			staleTime: Infinity,
		});

	const orders = data?.data ?? [];

	useLoading([isFetching]);

	return {
		orders,
	};
};
