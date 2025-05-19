import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="p-10 ml-[250px] w-full">{children}</div>
		</div>
	);
};
export default DefaultLayout;
