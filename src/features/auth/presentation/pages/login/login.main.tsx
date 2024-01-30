import LoginProvider from './context/login.context';
import LoginPage from './login.page';

const LoginMain = () => {
	return (
		<LoginProvider>
			<LoginPage />
		</LoginProvider>
	);
};

export default LoginMain;
