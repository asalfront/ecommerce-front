import { FC, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { BorderColorOutlined, DeleteOutlined } from '@mui/icons-material';

import { dataGridButtonsContainerStyles, iconButtonStyles, iconStyles } from './data-grid-user-actions.styles';
import { useDialog } from '@/core/hooks';
import { EditUserWidget } from '@/features/users/presentation/pages/home/widgets';
import { User } from '@/features/users/domain/entities';
import { useDeleteUser } from '@/features/users/presentation/pages/home/hooks';

interface Props {
	user: User;
}

export const DataGridUserActions: FC<Props> = (props) => {
	const { user } = props;
	const [editUserModal, setEditUserModal] = useState(false);
	const { onDeleteUser } = useDeleteUser(user.id);
	const { showConfirmDialog } = useDialog();

	const onDeleteUserConfirmation = () => {
		showConfirmDialog({
			title: 'Wait!',
			content: 'Are you sure you want to delete this user?',
			cancelText: 'Cancel',
			confirmText: 'Delete',
			onConfirm: () => onDeleteUser(),
		});
	};

	return (
		<Box sx={dataGridButtonsContainerStyles}>
			<IconButton 
				onClick={onDeleteUserConfirmation}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<DeleteOutlined sx={iconStyles}/>
			</IconButton>
			<IconButton 
				onClick={() => setEditUserModal(true)}
				disableTouchRipple
				sx={iconButtonStyles}
			>
				<BorderColorOutlined sx={iconStyles}/>
			</IconButton>
			{
				editUserModal && (
					<EditUserWidget
						id={user.id}
						open={editUserModal}
						onClose={() => setEditUserModal(false)}
					/>
				)
			}
		</Box> 
	);
};
