import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { FormHelper } from '@/core/helpers';
import { AppResponse } from '@/core/domain/entities/response/';
import { Customer } from '@/features/customers/domain/entities';
import { CustomerUseCase } from '@/features/customers/domain/usecases';
import { editCustomerValidation } from '../validations';


const initialCustomer: Customer = {
	id: 0,
	first_name: '',
	last_name: '',
	email: '',
	is_active: true,
	password: '',
	billing_address: '',
	shipping_address: '',
};

export const useEditCustomer = (id: number) => {
	const customerUseCase = di().resolve(CustomerUseCase);

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();

	const queryClient = useQueryClient();

	const dataFromCache = queryClient.getQueryData(['customer', authenticated.id, id]) as AppResponse<Customer>;

	const { control, handleSubmit, reset } = useForm<Customer>({
		resolver: yupResolver(editCustomerValidation),
		defaultValues: dataFromCache?.data ?? initialCustomer,
	});

	const { data, isFetching } = useQuery(['customer', authenticated.id, id],
		() => customerUseCase.getCustomer(id), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
				reset(r.data);
			},
			staleTime: Infinity,
		},
	);

	const updateCustomerMutation = useMutation(['update-customer', authenticated.id],
		(customer: Customer) => customerUseCase.updateCustomer(id, customer));

	const { closeLoading } = useLoading([isFetching, updateCustomerMutation.isLoading]);

	const customer = data?.data ?? initialCustomer;

	const onUpdateCustomer =  async (onClose: () => void) => {
		await handleSubmit((customerForm: Customer) => {
			const payload = FormHelper.cleanDataToBeSaved(customerForm, customer);

			if (FormHelper.isEmpty(payload)) {
				onClose();
				return;
			}
			
			updateCustomerMutation.mutate(payload, {
				onSuccess: (r) => {
					if (r.type === 'error') {
						showError(r);
						return;
					}
					onClose();
					closeLoading();
					queryClient.invalidateQueries(['customer', authenticated.id, id]);
					queryClient.invalidateQueries(['customers', authenticated.id]);
				}
			});
		})();
	};

	const onCancel = (onClose: () => void) => {
		onClose();
	};

	return {
		control,
		onUpdateCustomer,
		onCancel,
	};
};
