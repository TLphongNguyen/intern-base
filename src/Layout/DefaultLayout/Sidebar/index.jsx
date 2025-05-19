import React, { useState } from 'react';
import { HiHome, HiViewBoards, HiInbox, HiUsers, HiShoppingBag, HiLogin, HiPencilAlt } from 'react-icons/hi';

const Sidebar = () => {
	const [activeItem, setActiveItem] = useState('dashboard');

	const menuItems = [
		{ id: '/', icon: HiHome, label: 'Dashboard' },
		{ id: 'kanban', icon: HiViewBoards, label: 'Kanban', badge: 'Pro' },
		{ id: 'inbox', icon: HiInbox, label: 'Inbox', count: 3 },
		{ id: 'user', icon: HiUsers, label: 'Users' },
		{ id: 'products', icon: HiShoppingBag, label: 'Products' },
		{ id: 'signin', icon: HiLogin, label: 'Sign In' },
		{ id: 'signup', icon: HiPencilAlt, label: 'Sign Up' },
	];

	return (
		<>
			<aside
				className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0`}
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						{menuItems.map((item, index) => {
							const Icon = item.icon;
							const isActive = activeItem === item.id;

							return (
								<li key={index}>
									<a
										href={item.id}
										onClick={() => setActiveItem(item.id)}
										className={`flex items-center p-2 rounded-lg group ${
											isActive
												? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
												: 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
										}`}
									>
										<Icon
											className={`w-5 h-5 transition duration-75 ${
												isActive
													? 'text-gray-900 dark:text-white'
													: 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
											}`}
										/>
										<span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
										{item.badge && (
											<span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
												{item.badge}
											</span>
										)}
										{item.count && (
											<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
												{item.count}
											</span>
										)}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
