import { useQuery } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { UserUseCase } from '@/features/users/domain/usecases';

export const useUsers = () => {
	const { authenticated } = useAuth();
	const { showError } = useSnackbar(); 
	const userUseCase = di().resolve(UserUseCase);

	const { data, isFetching } = useQuery(['users', authenticated.id],
		() => userUseCase.getUsers(), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			enabled: authenticated.firstName !== '',
			staleTime: Infinity,
		});

	const users = data?.data ?? [];
    
	useLoading([isFetching]);

	return {
		users,
	};
};
