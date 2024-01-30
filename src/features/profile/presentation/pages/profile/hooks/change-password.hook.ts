import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import { changePasswordSchema } from '../validations';
import { ProfileUseCase } from '@/features/profile/domain/usecases';
import { ProfileDataSource } from '@/features/profile/data/datasources';
import { ProfileRepositoryImpl } from '@/features/profile/data/repositories';
import { ChangePassword } from '@/features/profile/domain/entities';
import { useAuth, useDialog, useLoading, useSnackbar } from '@/core/hooks';

const useChangePassword = () => {
	const { authenticated } = useAuth();
	const { showError } = useSnackbar();
	const { showSuccessDialog } = useDialog();

	const { control, handleSubmit, reset } = useForm<ChangePassword>({
		resolver: yupResolver(changePasswordSchema),
	});

	const profileUseCase = new ProfileUseCase(
		new ProfileRepositoryImpl(new ProfileDataSource()),
	);

	const _updatePasswordMutation = useMutation(['profile-password', authenticated.id], 
		(changePassword: ChangePassword) => profileUseCase.updatePassword(changePassword));

	useLoading([_updatePasswordMutation.isLoading]);

	const updatePassword = (changePasswordForm: ChangePassword) => {
		_updatePasswordMutation.mutate(changePasswordForm, {
			onSuccess: (r) => {
				reset();
				if (r.type === 'error') {
					showError(r);
					return;
				}
				showSuccessDialog({
					title: 'Ok!',
					content: 'Your password has been successfully modified',
					cancelText: 'Close',
				});
			}
		});
	};

	return {
		control,
		handleSubmit,
		reset,
		updatePassword,
	};
};

export default useChangePassword;
