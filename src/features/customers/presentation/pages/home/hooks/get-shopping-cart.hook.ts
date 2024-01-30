import { useQuery } from '@tanstack/react-query';
import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { UserUseCase } from '@/features/users/domain/usecases';

export const useShoppingCartByUser = () => {
	const userUseCase = di().resolve(UserUseCase);

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();

	const { data, isFetching  } = useQuery(['user', authenticated.id],
		() => userUseCase.getShoppingCart(), {
			onSuccess: (r: any) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			staleTime: Infinity,
		},
	);


	const shoppingCartId = data?.data[0]?.shoppingcartlines[0]?.shoppingcart ?? 0;
	
	useLoading([isFetching]);
	return {
		shoppingCartId,
		isFetching
	};
};
