import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useDialog, useLoading } from '@/core/hooks';
import { CategoryUseCase } from '@/features/categories/domain/usecases';


export const useDeleteCategory = (id: number) => {

	const categoryUseCase = di().resolve(CategoryUseCase);

	const { authenticated } = useAuth();
	const { showErrorDialog, showSuccessDialog } = useDialog();

	const queryClient = useQueryClient();

	const deleteCategoryMutation = useMutation(['delete-customer', authenticated.id, id],
		(_id: number) => categoryUseCase.deleteCategory(_id));
	
	useLoading([deleteCategoryMutation.isLoading]);
	
	const onDeleteCategory = () => {
		deleteCategoryMutation.mutate(id, {
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
					content: 'This category has been successfully removed.',
					cancelText: 'Close',
				});

				queryClient.invalidateQueries(['categories', authenticated.id,]);
			}
		});
	};

	return {
		onDeleteCategory
	};
};
