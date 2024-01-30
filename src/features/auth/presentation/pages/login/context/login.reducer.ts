import { LoginState, LoginStatus, LoginAction, LoginTypes } from './login.config';

const loginReducer = (state: LoginState, action: LoginAction) => {
	switch (action.type) {
		case LoginTypes.error:
			return {
				status: LoginStatus.error,
				message: action.payload.message,
			};
		default: {
			return state;
		}
	}
};

export default loginReducer;
