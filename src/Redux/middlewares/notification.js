import { defaultTypeSuffixes } from './loadingBar';
import { notification } from 'antd';

const notificationMiddleware = () => (next) => (action) => {
	const [_PENDING, FULFILLED, REJECTED] = defaultTypeSuffixes;
	const isRejected = new RegExp(`${REJECTED}$`, 'g');
	const isFulfilled = new RegExp(`${FULFILLED}$`, 'g');
	if (action.type.match(isRejected)) {
		notification.error({
			message: `Operation Has An Error ${action.type}`,
			description: action?.payload?.message || 'The operation has an error.',
			duration: 5,
		});
	} else if (action.type.match(isFulfilled)) {
		notification.success({
			message: `Operation Successful ${action.type}`,
			description: action?.payload?.message || 'The operation has completed successfully.',
			duration: 5,
		});
	}

	return next(action);
};
export { notificationMiddleware };
