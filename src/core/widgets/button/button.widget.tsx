import { FC } from 'react';
import { Box } from '@mui/material';

import { ButtonSizes, ButtonTypes, containerButtonStyles, StyledButton } from './button.styles';

interface Props {
	label?: string;
	type?: ButtonTypes;
	submit?: boolean;
	width?: string;
	size?: ButtonSizes;
	onClick?: () => void;
}

export const ButtonWidget: FC<Props> = (props) => {
	const { label, onClick, size = 'medium', type = 'primary', submit, width } = props;

	return (
		<Box 
			sx={containerButtonStyles(type)} 
			width={width}
			onClick={onClick}
		>
			<StyledButton
				fullWidth
				disableRipple
				variant="contained"
				type={submit ? 'submit' : 'button'}
				classes={{ root: `${type}-${size}`}}
			>
				{label}
			</StyledButton>
		</Box>
	);
};
