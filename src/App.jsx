import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { publicRouter } from './Router';
import DefaultLayout from './Layout/DefaultLayout';
import { useAppDispatch, useAppSelector } from './Redux/store';
import PrivateRouter from './Router/privateRouter';
function App() {
	const theme = useAppSelector((state) => state.themeState.theme);
	return (
		<Router>
			<div className="app" data-theme={theme}>
				<Routes>
					{publicRouter.map((router, index) => {
						const Page = router.components;
						let Layout = DefaultLayout;
						if (router.layout === null) {
							Layout = ({ children }) => <>{children}</>;
						}
						return (
							<Route
								key={index}
								path={router.path}
								element={
									<PrivateRouter>
										<Layout>
											<Page />
										</Layout>
									</PrivateRouter>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
