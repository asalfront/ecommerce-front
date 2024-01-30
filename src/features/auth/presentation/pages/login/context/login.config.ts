import { Dispatch } from 'react';

export interface LoginState {
  status?: string;
  message: string;
}

export enum LoginStatus {
  initial = 'initial',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export enum LoginTypes {
	init = 'auth-init',
	error = 'auth-error',
}

export type LoginAction = {
	type: LoginTypes;
	payload: LoginState;
}

export interface LoginStateContext {
	state: Partial<LoginState>
	dispatch: Dispatch<LoginAction>
}
