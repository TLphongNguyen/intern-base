import { createSlice } from '@reduxjs/toolkit';

export const LoadingBarSlice = createSlice({
	name: 'loadingBar',
	initialState: {
		show: false,
	},
	reducers: {
		setLoadingBar: (state, actions) => {
			state.show = actions.payload;
			return state;
		},
	},
});
export const { setLoadingBar } = LoadingBarSlice.actions;
export default LoadingBarSlice.reducer;
