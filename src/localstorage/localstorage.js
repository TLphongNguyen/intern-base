const setItemLocalstorage = (key, data) => {
	localStorage.setItem(key, data);
};
const getItemLocalstorage = (key) => {
	const item = localStorage.getItem(key);
	console.log(item);
	if (!item) {
		return null;
	}
	return item;
};
const defaultThemeLanguage = 'light';
const saveTheme = (name, key = 'theme') => {
	localStorage.setItem(key, name);
};

const getTheme = (key = 'theme') => {
	const theme = localStorage.getItem(key);
	if (theme) {
		return theme;
	} else {
		return defaultThemeLanguage;
	}
};
export { setItemLocalstorage, getItemLocalstorage, saveTheme, getTheme };
