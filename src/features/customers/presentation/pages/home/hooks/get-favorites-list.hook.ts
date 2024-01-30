import { useQuery } from '@tanstack/react-query';
import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { UserUseCase } from '@/features/users/domain/usecases';

export const useFavoritessByUser = (id: number) => {
	const userUseCase = di().resolve(UserUseCase);

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();

	const { data, isFetching  } = useQuery(['user', authenticated.id, id],
		() => userUseCase.getFavoriteList(id), {
			onSuccess: (r: any) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			staleTime: Infinity,
		},
	);
    
	const favoritesbyuser = data?.data[0]?.shoppingcartlines ?? [];
	
	useLoading([isFetching]);
	return {
		favoritesbyuser,
		isFetching
	};
};
