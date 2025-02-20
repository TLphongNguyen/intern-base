import LoadingBarSlice from '../reducers/slice/loadingBarSlice';
import userManager from '../reducers/slice/userSlice';
import ThemeSlice from '../reducers/slice/themeSlice';
const rootReducer = {
	loadingBar: LoadingBarSlice,
	users: userManager,
	themeState: ThemeSlice,
};
export { rootReducer };
