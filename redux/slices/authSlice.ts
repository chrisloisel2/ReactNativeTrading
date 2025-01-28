import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthenticated: false,
		user: null as string | null,
		state: "",
		error: null
	},
	reducers: {
		login: (state: any, action: PayloadAction<string>) => {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logout: (state: any) => {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
