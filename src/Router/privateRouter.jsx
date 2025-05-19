import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

function PrivateRouter({ children }) {
	const inforUser = {
		name: 'phong',
		age: 23,
	};

	if (inforUser) {
		return children;
	}
	return (
		<Navigate
			to={{
				pathname: `/`,
			}}
			replace={true}
		/>
	);
}

export default PrivateRouter;
