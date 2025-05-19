import { Button, Input } from 'antd';

function Login() {
	return (
		<div className="">
			<form action="" className="">
				<label htmlFor="">userName</label>
				<Input placeholder="nhap tai khoan" />
				<label htmlFor="">passWord</label>
				<Input placeholder="nhap mat khau" />
				<Button>Xác nhận</Button>
			</form>
		</div>
	);
}

export default Login;
