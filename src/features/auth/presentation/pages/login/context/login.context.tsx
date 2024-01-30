import React, { createContext, useContext, useReducer } from 'react';
import loginReducer from './login.reducer';
import { LoginState, LoginStatus, LoginStateContext } from './login.config';

type Props = {
	children: JSX.Element,
};

const initialLoginState: LoginState = {
	status: LoginStatus.initial,
	message: ''
};

const defaultValue = {
	state: initialLoginState,
	dispatch: () => undefined
};

const LoginContext = createContext<LoginStateContext>(defaultValue);

const LoginProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(loginReducer, initialLoginState);

	return (
		<LoginContext.Provider value={{state, dispatch}}>
			{children}
		</LoginContext.Provider>
	);
};

const useLoginState = () => useContext(LoginContext).state;
const useLoginDispatch = () => useContext(LoginContext).dispatch;

export { LoginContext, useLoginState, useLoginDispatch };
export default LoginProvider;
