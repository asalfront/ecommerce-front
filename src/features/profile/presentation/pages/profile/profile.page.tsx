import { useState } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { EmailOutlined, SupervisedUserCircle } from '@mui/icons-material';

import { ButtonWidget, DataGridWidget, InputFieldWidget } from '@/core/widgets';
import { Commets, ProfileForm } from '@/features/profile/domain/entities';
import useProfile from './hooks/profile.hook';
import { profileContainerStyles } from './profile.styles';
import { profileModel } from './validations';
import { ChangePasswordWidget } from './widgets';
import { useCommetsByUser } from './hooks/get-commets.hook';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<Commets>[] = [
	{ field: 'id', headerName: 'ID', flex: 0.3, minWidth: 100 },
	{ field: 'product_name', headerName: 'Product name', flex: 1, minWidth: 100 },
	{ field: 'user_name', headerName: 'User name', flex: 1, minWidth: 100 },
	{ field: 'description', headerName: 'Description', flex: 1, minWidth: 100 },
	{ field: 'qualification', headerName: 'Qualification', flex: 1, minWidth: 100 },
	{ field: 'product', headerName: 'Product', flex: 1, minWidth: 100 },
	{ field: 'user', headerName: 'User', flex: 1, minWidth: 100 },
];


const ProfilePage = () => {

	const [openModal, setOpenModal] = useState<boolean>(false);
	const { control, handleSubmit, updateProfile, id } = useProfile();
	
	const { formField, formId } = profileModel;
	
	const onSubmit = (profile: ProfileForm) => {
		updateProfile(profile);
	};

	const { commetsbyuser } = useCommetsByUser(id);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} id={formId}>
				<Grid container sx={profileContainerStyles}  rowGap={4}>
					<Grid item xs={12}>
						<Typography variant="h1">Profile</Typography>
					</Grid>
					<Grid item xs={12}>
						<Divider />
					</Grid>
					<Grid container item xs={8} rowGap={4} columnSpacing={4}>
						<Grid item xs={6}>
							<InputFieldWidget
								control={control}
								name={formField.firstName.name}
								label={formField.firstName.label}
								placeholder={formField.firstName.placeholder}
								endAdornment={<SupervisedUserCircle/>}
							/>
						</Grid>
						<Grid item xs={6}>
							<InputFieldWidget
								control={control}
								name={formField.lastName.name}
								label={formField.lastName.label}
								placeholder={formField.lastName.placeholder}
								endAdornment={<SupervisedUserCircle/>}	
									
							/>
						</Grid>
						<Grid item xs={6}>
							<InputFieldWidget
								control={control}
								name={formField.email.name}
								label={formField.email.label}
								placeholder={formField.email.placeholder}
								endAdornment={<EmailOutlined/>}	
								disabled
										
							/>							
						</Grid>
						<Grid item xs={6}>
							<InputFieldWidget
								control={control}
								name={formField.phone.name}
								label={formField.phone.label}
								placeholder={formField.phone.placeholder}
								endAdornment={<SupervisedUserCircle/>}	
									
							/>
						</Grid>
						<Grid item xs={6}>
							<ButtonWidget 
								label="Change your password" 
								type='tertiary' 
								onClick={() => setOpenModal(true)}
							/>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3">Comments</Typography>
					</Grid>
					<Grid item xs={12}>
						<DataGridWidget 
							columns={columns}
							rows={commetsbyuser}
							pageSize={10}
						/>
					</Grid>
					
					<Grid 
						container
						item 
						xs={12}
						marginTop={{
							xs: 10,
							md: 14
						}}
						justifyContent='space-evenly'
					>
						<Grid item xs={5} md={4}>
							<ButtonWidget 
								label="Cancel" 
								type='secondary' 
							/>
						</Grid>
						<Grid item xs={5} md={4}>
							<ButtonWidget 
								label="Save" 
								type='primary' 	
								submit
							/>
						</Grid>
					</Grid>
				</Grid>
			</form>
			<ChangePasswordWidget open={openModal} onClose={() => setOpenModal(false)}/>
		</>
	);
};

export default ProfilePage;
