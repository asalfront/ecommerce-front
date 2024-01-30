import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { FormHelper } from '@/core/helpers';
import { profileSchema } from '../validations';
import { Profile, ProfileForm } from '@/features/profile/domain/entities';
import { ProfileUseCase } from '@/features/profile/domain/usecases';
import { ProfileDataSource } from '@/features/profile/data/datasources';
import { ProfileRepositoryImpl } from '@/features/profile/data/repositories';
import { useAuth, useDialog, useLoading, useSnackbar } from '@/core/hooks';

const initialProfile: Profile = {
	id: 0,
	first_name: '',
	email: '',
	last_name: '',
	createdAt: '',
	updatedAt: '',
	isActive: false,
	status: '',
	phone: ''
};

const useProfile = () => {
	const { authenticated } = useAuth();
	const { showError } = useSnackbar();
	const { showSuccessDialog } = useDialog();
	const { control, handleSubmit, reset } = useForm<ProfileForm>({
		resolver: yupResolver(profileSchema),
	});

	const profileUseCase = new ProfileUseCase(
		new ProfileRepositoryImpl(new ProfileDataSource()),
	);

	const queryClient = useQueryClient();

	const { data, isFetching } = useQuery(['profile', authenticated.id], 
		() => profileUseCase.getProfile(), {
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
				reset(r.data);
			},
		});

	const profile = data?.data ?? initialProfile;

	const updateProfileMutation = useMutation(['profile', profile.id],
		(form: ProfileForm) => profileUseCase.updateProfile(profile.id, form));

	useLoading([isFetching, updateProfileMutation.isLoading]);


	const updateProfile =  (form: ProfileForm) => {
		const payload = FormHelper.cleanDataToBeSaved(form, profile);

		if (FormHelper.isEmpty(payload)) return;
		
		updateProfileMutation.mutate(payload,{
			onSuccess: (r) => {
				if (r.type === 'error') {
					showError(r);
					return;
				}
				showSuccessDialog({
					title: 'Profile Updated',
					content: 'Your profile has been updated successfully.',
					cancelText: 'Close',
				});

				queryClient.invalidateQueries(['profile', authenticated.id]);
			}
		});
	};

	const id = profile.id;
	
	return {
		profile: data,
		control,
		handleSubmit,
		updateProfile,
		id
	};
};

export default useProfile;
