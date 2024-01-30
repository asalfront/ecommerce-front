import { useQuery } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { CustomerUseCase } from '@/features/customers/domain/usecases';

export const useCustomers = () => {
	const { authenticated } = useAuth();
	const { showError } = useSnackbar(); 
	const customerUseCase = di().resolve(CustomerUseCase);

	const { data, isFetching } = useQuery(['customers', authenticated.id],
		() => customerUseCase.getCustomers(), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			enabled: authenticated.firstName !== '',
			staleTime: Infinity,
		});

	const customers = data?.data ?? [];
    
	useLoading([isFetching]);

	return {
		customers,
	};
};
