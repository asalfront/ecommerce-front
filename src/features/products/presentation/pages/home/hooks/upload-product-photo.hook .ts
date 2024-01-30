import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { ProductUseCase } from '@/features/products/domain/usecases';
import { useProductContext } from './product-context.hook';


export const useUploadProductPhoto = () => {

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();
	const { product } = useProductContext();

	const queryClient = useQueryClient();
	const productUseCase = di().resolve(ProductUseCase);

	const uploadPhotoMutation = useMutation(['profile'], 
		(file: File) => productUseCase.uploadPhoto(product?.id ?? 0, file));

	useLoading([uploadPhotoMutation.isLoading]);

	const uploadPhoto = (file: File) => {
		uploadPhotoMutation.mutate(file, {
			onSuccess: (data) => {
				if ( data.type === 'error') {
					showError(data);
					return;
				}
				queryClient.invalidateQueries(['product', authenticated.id, product?.id]);
			},
		});
	};


	return {
		uploadPhoto,
	};
};
