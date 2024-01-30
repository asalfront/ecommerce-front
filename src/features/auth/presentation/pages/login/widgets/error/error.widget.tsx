import { Grid } from '@mui/material';
import { Title } from '../../login.styles';
import { useLoginState } from '../../context/login.context';
import { LoginStatus } from '../../context/login.config';

const ErrorWidget = () => {
	const state = useLoginState();

	return (
		<>
			{state.status == LoginStatus.error &&
				<Grid item>
					<Title>{state.message}</Title>
				</Grid>
			}
		</>
	);
};

export default ErrorWidget;
