import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


const login = createAsyncThunk('auth/login', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const user = await response.json();
	return user;
});


export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuthenticated: false,
		user: {},
		state: "",
		error: "",
	},
	reducers: {
		logout: (state: any) => {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
	extraReducers: (b) => {
		b.addCase(login.pending, (state) => {
			state.state = "loading";
		});
		b.addCase(login.fulfilled, (state, action) => {
			state.state = "success";
			state.user = action.payload;
		});
		b.addCase(login.rejected, (state, action) => {
			state.state = "failed";
			state.error = action.error.message || "";
		});
	},
});

export const { logout } = authSlice.actions;
export { login };
export default authSlice.reducer;
