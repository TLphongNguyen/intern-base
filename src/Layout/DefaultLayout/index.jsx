import Header from '../components/Header';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
	return (
		<div className="">
			<Header />
			<div className="flex">
				<Sidebar />
				<div className="">{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
