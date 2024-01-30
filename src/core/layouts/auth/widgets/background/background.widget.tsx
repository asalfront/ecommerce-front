import Box from '@mui/material/Box';
import { backgroundStyles } from './background.styles';
import techgeniesLogo from '../../../../../assets/img/techgenies-logo.png';

const BackgroundWidget = () => {
	return (
		<Box sx={backgroundStyles}>
			<img src={techgeniesLogo} alt='techgenies-logo' style={{position:'relative', top:'42%', left:'30%', width:'30%'}} />
		</Box>
	);
};

export default BackgroundWidget;
