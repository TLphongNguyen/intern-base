import { createSlice } from '@reduxjs/toolkit';

export const ThemeSlice = createSlice({
	name: 'themeSlice',
	initialState: {
		theme: 'light',
	},
	reducers: {
		settheme: (state, action) => {
			state.theme = action.payload;
		},
	},
});
export const { settheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
