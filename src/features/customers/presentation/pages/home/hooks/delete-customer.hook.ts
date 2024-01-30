import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useDialog, useLoading } from '@/core/hooks';
import { CustomerUseCase } from '@/features/customers/domain/usecases';


export const useDeleteCustomer = (id: number) => {

	const customerUseCase = di().resolve(CustomerUseCase);

	const { authenticated } = useAuth();
	const { showErrorDialog, showSuccessDialog } = useDialog();

	const queryClient = useQueryClient();

	const deleteCustomerMutation = useMutation(['delete-customer', authenticated.id, id],
		(_id: number) => customerUseCase.deleteCustomer(_id));
	
	useLoading([deleteCustomerMutation.isLoading]);
	
	const onDeleteCustomer = () => {
		deleteCustomerMutation.mutate(id, {
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
					content: 'This customer has been successfully removed.',
					cancelText: 'Close',
				});

				queryClient.invalidateQueries(['customers', authenticated.id,]);
			}
		});
	};

	return {
		onDeleteCustomer,
	};
};
