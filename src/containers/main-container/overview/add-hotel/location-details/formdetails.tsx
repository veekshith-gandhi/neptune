import { Button, Checkbox, Form, Input, Space } from "antd";
import { FunctionComponent, useState } from "react";

const { Search } = Input;
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 }
};



export const FormDetails : FunctionComponent = () => {
	
	const [isDissabled, setIsDissabled] = useState(true);


	const checkBoxChecking = (e:any) => {
		e.target.checked ? setIsDissabled(false) : setIsDissabled(true); 
	};
	return (
		<Form style={{ padding: 24, minHeight: 360, background: "aliceblue" }} {...layout} layout="vertical"  name="nest-messages">
			<Form.Item label="Search Location">
				<Search placeholder="Enter input" allowClear enterButton="Search" size="middle" />
			</Form.Item>
			<Space>
				<Form.Item label="Latitude">
					<Input type="tel" allowClear />
				</Form.Item>
				<Form.Item label="Longitude">
					<Input type="tel" allowClear />
				</Form.Item>
			</Space>
			<Form.Item label="Locality">
				<Input type="Name" allowClear />
			</Form.Item>
			<Form.Item name={["name"]} label="Address" rules={[{ required: true }]}>
				<Input type="name" allowClear />
			</Form.Item>
			<Space>
				<Form.Item label="City" name={["city"]} rules={[{ required: true }]}>
					<Input type="name" allowClear />
				</Form.Item>
				<Form.Item label="Pincode" name={["pincode"]} rules={[{ required: true }]}>
					<Input type="tel" allowClear />
				</Form.Item>
			</Space>
			<Space>
				<Form.Item label="State" name={["state"]} rules={[{ required: true }]}>
					<Input allowClear />
				</Form.Item>
				<Form.Item label="Country" hasFeedback name={["country"]} rules={[{ required: true }]}>
					<Input allowClear />
				</Form.Item>
			</Space>
			<Form.Item name={["checked"]} rules={[{ required: true }]} valuePropName="checked">
				<Checkbox onChange={checkBoxChecking} value={"checked"}>
                    I agree to all your terms and condition
				</Checkbox>
			</Form.Item>
			<Form.Item>
				<Space>
					<Button type="primary" disabled={isDissabled} htmlType="submit">
                        Save and Submit
					</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};