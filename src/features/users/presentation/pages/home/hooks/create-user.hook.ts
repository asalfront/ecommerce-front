import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { di, useAuth, useLoading, useSnackbar, useDialog } from '@/core/hooks';
import { addUserValidation } from '@/features/users/presentation/pages/home/validations';
import { User } from '@/features/users/domain/entities';
import { UserUseCase } from '@/features/users/domain/usecases';

export const useCreateUser = () => {

	const { authenticated } = useAuth();
	const { showError } = useSnackbar();
	const { showSuccessDialog } = useDialog();

	const { control, handleSubmit, reset } = useForm<User>({
		resolver: yupResolver(addUserValidation),
	});

	const queryClient = useQueryClient();
	const userUseCase = di().resolve(UserUseCase);

	const createUserMutation = useMutation(['create-user', authenticated.id], 
		(user: User) => userUseCase.createUser(user));

	useLoading([createUserMutation.isLoading]);

	const createUser = (onClose: () => void) => {
		handleSubmit((user: User) => {
			const userToCreate = {
				...user,
				last_login: new Date().toISOString(),
			};
			createUserMutation.mutate(userToCreate, {
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
					queryClient.invalidateQueries(['users', authenticated.id]);
				}
			});
		})();
	};

	return {
		control,
		createUser,
		reset,
	};
};
