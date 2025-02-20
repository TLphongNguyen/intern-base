const processing = () => (next) => (action) => {
	const result = next(action);
	return result;
};
export { processing };
