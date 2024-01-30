import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar, useDialog } from '@/core/hooks';
import { addCustomerValidation } from '@/features/customers/presentation/pages/home/validations';
import { Customer } from '@/features/customers/domain/entities';
import { CustomerUseCase } from '@/features/customers/domain/usecases';

export const useCreateCustomer = () => {

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();
	const { showSuccessDialog } = useDialog();

	const { control, handleSubmit, reset } = useForm<Customer>({
		resolver: yupResolver(addCustomerValidation),
	});

	const queryClient = useQueryClient();
	const customerUseCase = di().resolve(CustomerUseCase);

	const createCustomerMutation = useMutation(['create-customer', authenticated.id], 
		(customer: Customer) => customerUseCase.createCustomer(customer));

	useLoading([createCustomerMutation.isLoading]);

	const createCustomer = (onClose: () => void) => {
		handleSubmit((customer: Customer) => {
			createCustomerMutation.mutate(customer, {
				onSuccess: (data) => {
					reset();
					if (data.type === 'error') {
						showError(data);
						return;
					}
					onClose();
					showSuccessDialog({
						title: 'Ok!',
						content: 'This customer has been successfully registered.',
						cancelText: 'Close',
					});
					queryClient.invalidateQueries(['customers', authenticated.id]);
				}
			});
		})();
	};

	return {
		control,
		createCustomer,
		reset,
	};
};
