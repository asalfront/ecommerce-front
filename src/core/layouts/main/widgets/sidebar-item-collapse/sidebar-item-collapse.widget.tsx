import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ExpandLessOutlined, ExpandMoreOutlined } from '@mui/icons-material';

import { RouteType } from '@/core/routes/models/route';
import { theme } from '@/core/theme/theme';
import { SidebarItemWidget } from '..';
import { sidebarItemCollapseStyles } from './sidebar-item-collapse.styles';


type Props = {
  item: RouteType;
};

export const SidebarItemCollapseWidget = ({ item }: Props) => {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const locations = location.pathname.split('/');
	const match = locations.find((loc) => loc === item.state);

	useEffect(() => {
		if (match) {
			setOpen(true);
		}
	}, [item]);

	return (
		item.sidebarProps ? (
			<>
				<ListItemButton
					onClick={() => setOpen(!open)}
					sx={{
						...sidebarItemCollapseStyles,
						backgroundColor: match ? theme.palette.primary.hovered : 'transparent',
					}}
				>
					<ListItemIcon sx={{
						color: theme.palette.common.white,
					}}>
						{item.sidebarProps.icon && item.sidebarProps.icon}
					</ListItemIcon>
					<ListItemText
						disableTypography
						primary={
							<Typography>
								{item.sidebarProps.label}
							</Typography>
						}
					/>
					{open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
				</ListItemButton>
				<Collapse in={open} timeout="auto">
					<List disablePadding>
						{item.children?.map((route, index) => (
							route.sidebarProps ? (
								route.children ? (
									<SidebarItemCollapseWidget item={route} key={index} />
								) : (
									<SidebarItemWidget item={route} key={index} />
								)
							) : null
						))}
					</List>
				</Collapse>
			</>
		) : null
	);
};
