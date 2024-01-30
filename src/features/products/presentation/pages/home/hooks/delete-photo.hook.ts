import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { ProductUseCase } from '@/features/products/domain/usecases';
import { useProductContext } from './product-context.hook';


export const useDeletePhoto = () => {

	const productUseCase = di().resolve(ProductUseCase);
	const { productId } = useProductContext();

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();

	const queryClient = useQueryClient();

	const deletePhotoMutation = useMutation(['delete-photo', authenticated.id],
		(_id: number) => productUseCase.deletePhoto(_id));
	
	useLoading([deletePhotoMutation.isLoading]);
	
	const onDeletePhoto = (id: number) => {
		deletePhotoMutation.mutate(id, {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
				queryClient.invalidateQueries(['product', authenticated.id, productId], { exact: true });
			}
		});
	};

	return {
		onDeletePhoto,
	};
};
