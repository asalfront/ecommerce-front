import { Grid } from '@mui/material';

import TitleWidget from './widgets/title/title.widget';
import FormWidget from './widgets/form/form.widget';
import ErrorWidget from './widgets/error/error.widget';

const LoginPage = () => {
	return (
		<Grid container direction="column" spacing={2}>
			<TitleWidget />
			<ErrorWidget />
			<Grid item>
				<FormWidget />
			</Grid>
		</Grid>
	);
};

export default LoginPage;
