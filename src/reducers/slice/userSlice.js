import { createSlice } from '@reduxjs/toolkit';

const userManager = createSlice({
	name: 'user',
	initialState: {
		userInfor: null,
		isLoggedIn: false,
	},
	reducers: {
		setInforUser: (state, action) => {
			(state.userInfor = action.payload), (state.isLoggedIn = true);
		},
		updateInforUser: (state, action) => {
			state.userInfor = {
				...state.userInfor,
				...action.payload,
			};
		},
		logout: (state) => {
			(state.userInfor = null), (state.isLoggedIn = false);
		},
	},
});
export const { setInforUser, updateInforUser, logout } = userManager.actions;
export default userManager.reducer;
