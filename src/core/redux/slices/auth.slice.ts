import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Authenticated } from '../../../features/auth/domain/entities/authenticated';

const initialState: Authenticated = {
	id: 0,
	firstName: '',
	email: '',
	status: '',
	isActive: false,
	roles: [],
	token: '',
	username: ''
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<Authenticated>) => {
			return action.payload;
		},
		logout: () => {
			return initialState;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
