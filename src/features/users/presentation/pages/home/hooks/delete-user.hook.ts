import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useDialog, useLoading } from '@/core/hooks';
import { UserUseCase } from '@/features/users/domain/usecases';


export const useDeleteUser = (id: number) => {

	const userUseCase = di().resolve(UserUseCase);

	const { authenticated } = useAuth();
	const { showErrorDialog, showSuccessDialog } = useDialog();

	const queryClient = useQueryClient();

	const deleteUserMutation = useMutation(['delete-user', authenticated.id, id],
		(_id: number) => userUseCase.deleteUser(_id));
	
	useLoading([deleteUserMutation.isLoading]);
	
	const onDeleteUser = () => {
		deleteUserMutation.mutate(id, {
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
					content: 'This user has been successfully removed.',
					cancelText: 'Close',
				});

				queryClient.invalidateQueries(['users', authenticated.id]);
			}
		});
	};

	return {
		onDeleteUser,
	};
};
