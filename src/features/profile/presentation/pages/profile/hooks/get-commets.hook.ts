/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { ProfileUseCase } from '@/features/profile/domain/usecases';
import { Commets } from '@/features/profile/domain/entities';

const initialComment: Commets = {
	id: 0,
	product_name: '',
	user_name: '',
	description: '',
	qualification: 0,
	product: 0,
	user: 0
};

export const useCommetsByUser = (id: number) => {
	const profileUseCase = di().resolve(ProfileUseCase);

	const { authenticated }: any = useAuth();
	const { showError } = useSnackbar();

	const { data, isFetching } = useQuery(['commets', authenticated.id, id],
		() => profileUseCase.getCommets(id), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
			},
			staleTime: Infinity,
		},
	);
	const commetsbyuser = data?.data.comments ?? initialComment;

	useLoading([isFetching]);
	return {
		commetsbyuser
	};
};
