import { FC } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { dividerStyles, menuListStyles, menuItemStyles, menuPaperStyles } from './menu.styles';

interface Props {
	anchorEl: null | HTMLElement;
	isOpen: boolean;
	onClose: () => void;
}

export const MenuWidget:FC<Props> = ({anchorEl, isOpen, onClose}) => {
	const navigate = useNavigate();

	const onCustomersPage = () => {
		onClose();
		navigate('/private/customers');
	};

	const onProjectsPage = () => {
		onClose();
		navigate('/private/projects');
	};

	const onProfilePage = () => {
		onClose();
		navigate('/private/profile');
	};

	if (!isOpen) return null;

	return (
		<Menu
			open={isOpen}
			anchorEl={anchorEl}
			PaperProps={{ sx: menuPaperStyles }}
			MenuListProps={{ sx: menuListStyles }}
			keepMounted={false}
			elevation={0}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			onClose={onClose}
		>
			<MenuItem
				onClick={onProfilePage}
				sx={menuItemStyles}
			>
				Profile
			</MenuItem>
			<Box sx={dividerStyles}/>
			<MenuItem
				onClick={onProjectsPage}
				sx={menuItemStyles}
			>
				Projects
			</MenuItem>
			<Box sx={dividerStyles}/>
			<MenuItem
				onClick={onCustomersPage}
				sx={menuItemStyles}
			>
				Customers
			</MenuItem>
			<Box sx={dividerStyles}/>
			<MenuItem 
				sx={menuItemStyles}
			>
				Logout
			</MenuItem>
		</Menu>
	);
};
