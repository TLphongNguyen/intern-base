import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

function PrivateRouter({ children }) {
	// const inforUser = useSelector((state) => state.users.userInfor);
	const inforUser = {
		name: 'phong',
		age: 23,
	};
	console.log(inforUser);
	if (inforUser) {
		return children;
	}
	return (
		<Navigate
			to={{
				pathname: `/login`,
			}}
			replace={true}
		/>
	);
}

export default PrivateRouter;
