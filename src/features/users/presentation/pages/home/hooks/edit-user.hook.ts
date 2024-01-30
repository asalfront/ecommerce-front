import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import { di, useAuth, useLoading, useSnackbar } from '@/core/hooks';
import { FormHelper } from '@/core/helpers';
import { User, UserResponse } from '@/features/users/domain/entities';
import { editUserValidation } from '../validations';
import { UserUseCase } from '@/features/users/domain/usecases';


const initialUser: User = {
	id: 0,
	first_name: '',
	last_name: '',
	email: '',
	password: undefined,
	role: '',
	last_login: '',
};

export const useEditUser = (id: number) => {
	const userUseCase = di().resolve(UserUseCase);

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();

	const queryClient = useQueryClient();

	const dataFromCache = queryClient.getQueryData(['user', authenticated.id, id]) as UserResponse;

	const { control, handleSubmit, reset } = useForm<User>({
		resolver: yupResolver(editUserValidation),
		defaultValues: dataFromCache?.data ?? initialUser,
	});

	const { data, isFetching } = useQuery(['user', authenticated.id, id],
		() => userUseCase.getUser(id), {
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

	const updateUserMutation = useMutation(['update-user', authenticated.id],
		(user: User) => userUseCase.updateUser(id, user));

	const { closeLoading } = useLoading([isFetching, updateUserMutation.isLoading]);

	const user = data?.data ?? initialUser;

	const onUpdateUser =  async (onClose: () => void) => {
		await handleSubmit((userForm: User) => {
			const payload = FormHelper.cleanDataToBeSaved(userForm, user);

			if (FormHelper.isEmpty(payload)) {
				onClose();
				return;
			}
			
			updateUserMutation.mutate(payload, {
				onSuccess: (r) => {
					if (r.type === 'error') {
						showError(r);
						return;
					}
					onClose();
					closeLoading();
					queryClient.invalidateQueries(['user', authenticated.id, id]);
					queryClient.invalidateQueries(['users', authenticated.id]);
				}
			});
		})();
	};

	const onCancel = (onClose: () => void) => {
		onClose();
	};

	return {
		control,
		onUpdateUser,
		onCancel,
	};
};
