import React from 'react';
import { useForm } from 'react-hook-form';
import ServiceUser from '../../Services/userServices/userServices';
import { useDispatch } from 'react-redux';
import { setInforUser } from '../../reducers/slice/userSlice';
import { URL_BASE } from '../../constants';

const SignIn = () => {
	const dispatch = useDispatch();
	const { handleSubmit } = useForm();
	const servicesUser = new ServiceUser(URL_BASE, () => {});
	const onSubmit = async () => {
		try {
			const response = await servicesUser.Login();
			handleLogin(response.access_token);
		} catch (err) {
			console.log(err);
		}
	};

	const handleLogin = async (accessToken) => {
		try {
			const response = await servicesUser.GetUser(accessToken);
			dispatch(setInforUser(response));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className="bg-gradient-to-r from-[#0036B2] to-[#0AC3E5] dark:bg-gray-900 h-screen pt-[100px]">
			<div className="flex flex-col items-center rounded-[20px] justify-center px-6 py-8 mx-auto md:h-[80%] lg:py-0 ">
				<div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 shadow-lg md:space-y-6 sm:p-8">
						<div className="flex justify-center">
							<a
								href="#"
								className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white"
							>
								<img className="w-[160px] h-10 mr-5" src="./logo.svg" alt="logo" />
								C-Hear
							</a>
						</div>
						<h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
							Đăng nhập vào tài khoản của bạn
						</h1>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-white dark:text-white"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-[#ccc] border-solid text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
									placeholder="name@cmc.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-white dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
										/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-white dark:text-gray-300">
											Ghi nhớ đăng nhập
										</label>
									</div>
								</div>
								<a
									href="#"
									className="text-sm font-medium text-white hover:underline dark:text-primary-500"
								>
									Quên mật khẩu?
								</a>
							</div>
							<button
								type="submit"
								className="w-full shadow cursor-pointer text-white bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
							>
								Đăng nhập
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
