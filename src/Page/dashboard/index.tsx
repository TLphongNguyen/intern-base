import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const Dashboard = () => {
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	const columns = [
		{
			title: 'Tên người dùng',
			dataIndex: 'full_name',
			key: 'full_name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Số điện thoại',
			dataIndex: 'phone_number',
			key: 'phone_number',
		},
		{
			title: 'Đơn vị',
			dataIndex: 'unit',
			key: 'unit',
		},
		{
			title: 'Loại ý kiến',
			dataIndex: 'feedback_type',
			key: 'feedback_type',
		},
		{
			title: 'Ý kiến',
			dataIndex: 'feedback',
			key: 'feedback',
		},
		{
			title: 'Tệp đính kèm',
			dataIndex: 'file_link',
			key: 'file_link',
			render: (file_link: string) =>
				file_link ? (
					<a
						href={file_link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:text-blue-800"
					>
						Xem tệp
					</a>
				) : (
					'Không có tệp'
				),
		},
	];

	useEffect(() => {
		const response = [
			{
				id: '325f8b7d-5d3a-487e-9aab-a2f123deae31',
				full_name: 'Nguyen Tien Linh Phong',
				email: 'phongnguyen2863@gmail.com',
				phone_number: '0862889603',
				unit: 'Phòng Kỹ thuật',
				feedback_type: 'Đánh giá tích cực',
				feedback: 'Rất tốt',
				file_link: 'https://example.com/file1.pdf',
			},
			{
				id: '2b5f8b7d-5d3a-487e-9aab-a2f123deae32',
				full_name: 'Tran Thi B',
				email: 'tranthib@example.com',
				phone_number: '0987654321',
				unit: 'Phòng Nhân sự',
				feedback_type: 'Đánh giá trung lập',
				feedback: 'Hài lòng',
				file_link: 'https://example.com/file2.pdf',
			},
			{
				id: '3c5f8b7d-5d3a-487e-9aab-a2f123deae33',
				full_name: 'Le Van C',
				email: 'levanc@example.com',
				phone_number: '0912345678',
				unit: 'Phòng Kinh doanh',
				feedback_type: 'Đánh giá tiêu cực',
				feedback: 'Cần cải thiện',
				file_link: '',
			},
		];

		setLoading(true);
		setTimeout(() => {
			setData(response);
			setLoading(false);
		}, 1000);
	}, []);

	const positive = data.filter((item) => item.feedback_type === 'Đánh giá tích cực').length;
	const negative = data.filter((item) => item.feedback_type === 'Đánh giá tiêu cực').length;

	const percent = (count: number) => {
		if (data.length === 0) return 0;
		return ((count / data.length) * 100).toFixed(1);
	};

	return (
		<div className="min-h-screen  p-4 sm:p-8 md:p-12">
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Dashboard</h1>

			{/* Stats */}
			<div className="grid gap-4 md:grid-cols-3 mb-10">
				<div className="bg-white p-6 rounded-lg shadow text-center">
					<h2 className="text-lg font-semibold mb-2">Tổng số đánh giá</h2>
					<p className="text-3xl text-blue-600 font-bold">{data.length}</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow text-center">
					<h2 className="text-lg font-semibold mb-2">Đánh giá tích cực</h2>
					<div className="w-full h-4 bg-gray-200 rounded-full mb-2">
						<div className="h-full bg-green-500 rounded-full" style={{ width: `${percent(positive)}%` }} />
					</div>
					<p className="text-sm text-gray-700">{percent(positive)}%</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow text-center">
					<h2 className="text-lg font-semibold mb-2">Đánh giá tiêu cực</h2>
					<div className="w-full h-4 bg-gray-200 rounded-full mb-2">
						<div className="h-full bg-red-500 rounded-full" style={{ width: `${percent(negative)}%` }} />
					</div>
					<p className="text-sm text-gray-700">{percent(negative)}%</p>
				</div>
			</div>

			{/* Table */}
			<div className="bg-white p-4 rounded-lg shadow">
				<h2 className="text-xl font-semibold mb-4">Danh sách đánh giá</h2>
				<Table
					columns={columns}
					dataSource={data}
					loading={loading}
					pagination={{ pageSize: 5 }}
					rowKey="id"
					className="overflow-x-auto"
				/>
			</div>
		</div>
	);
};

export default Dashboard;
