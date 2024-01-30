import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useDialog, useLoading } from '@/core/hooks';
import { ProductUseCase } from '@/features/products/domain/usecases';


export const useDeleteProduct = (id: number) => {

	const productUseCase = di().resolve(ProductUseCase);

	const { authenticated } = useAuth();
	const { showErrorDialog, showSuccessDialog } = useDialog();

	const queryClient = useQueryClient();

	const deleteProductMutation = useMutation(['delete-product', authenticated.id, id],
		(_id: number) => productUseCase.deleteProduct(_id));
	
	useLoading([deleteProductMutation.isLoading]);
	
	const onDeleteProduct = () => {
		deleteProductMutation.mutate(id, {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showErrorDialog({
						title: 'Oops!',
						content: 'There was a problem, this option cannot be removed from the list.',
						cancelText: 'Close',
					});
					return;
				}
				showSuccessDialog({
					title: 'Ok!',
					content: 'This product has been successfully removed.',
					cancelText: 'Close',
				});

				queryClient.invalidateQueries(['products', authenticated.id]);
			}
		});
	};

	return {
		onDeleteProduct,
	};
};
