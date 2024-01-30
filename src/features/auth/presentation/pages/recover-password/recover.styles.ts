import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const SubText = styled('div')({
	color: 'black',
	fontSize: '15px',
	fontWeight: 600,
	padding: 30,
	textAlign: 'center'
});

export const recoverStyles = {
	txtRight: {
		textAlign: 'right'
	},
};

export const BoxButtons = styled(Box)({
	textAlign: 'center',
	display: 'flex',
	gap: '10px',
	marginLeft: '15px',
	marginTop: '70px',
	justifyContent: 'space-between'
});

