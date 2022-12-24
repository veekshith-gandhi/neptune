import { ContactsOutlined, HomeOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, DatePickerProps, Form, Input, Progress, Select, Space, Typography } from "antd";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { addBasicInfoToHotelCreation } from "../redux/action";
import type { HotelCreationBasicInput } from "../types";

const { Title } = Typography;
const { Option } = Select;
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 }
};
export const Basicinfo: FunctionComponent = () => {
	const dispatch = useDispatch();
	const [dateString, setDateString] = useState("");
	const [percent, setPercent] = useState(0);

	const onFinish = (e: HotelCreationBasicInput) => {
		e.date = dateString;
		setPercent(percent + 20);
		dispatch(addBasicInfoToHotelCreation(e));
	};
	const onChange: DatePickerProps["onChange"] = (date, dateString) => {
		setDateString(dateString);
	};

	return (
		<Card style={{ width: "140vh", margin: "auto" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Title level={4}>Welcome to Ingo-MMT</Title>
					<p>Please fill in basic details of your property</p>
				</div>
				<div>
					<Progress percent={percent} status="active" strokeColor={{ from: "#108ee9", to: "#87d068" }} />
					<Space wrap>
						<Progress type="circle" width={50} percent={percent} strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }} />
					</Space>
				</div>
			</div>
			<Form {...layout} style={{ padding: 24, minHeight: 360, background: "aliceblue" }} layout="vertical" onFinish={onFinish}>
				<Form.Item rules={[{ required: true }]} label="Property Name" hasFeedback name="propertyName">
					<Input type="Name" prefix={<HomeOutlined />} allowClear />
				</Form.Item>
				<Form.Item label="Hotel Star Ratings" rules={[{ required: true }]} hasFeedback name="starRating">
					<Select placeholder="select Number" allowClear>
						<Option value="1">1</Option>
						<Option value="2">2</Option>
						<Option value="3">3</Option>
						<Option value="4">4</Option>
						<Option value="5">5</Option>
					</Select>
				</Form.Item>
				<Form.Item label="Taking booking since year" rules={[{ required: true }]} hasFeedback name="date">
					<DatePicker onChange={onChange} picker="year" />
				</Form.Item>
				<Form.Item label="Contact Number" rules={[{ required: true }]} hasFeedback name="contactNumber">
					<Input type="tel" allowClear prefix={<ContactsOutlined />} />
				</Form.Item>
				<Form.Item label="Email" rules={[{ required: true }]} hasFeedback name="email">
					<Input type="Email" allowClear prefix={<MailOutlined />} />
				</Form.Item>
				<Form.Item>
					<Space>
						<Button type="primary" htmlType="submit">
                            Save and Submit
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</Card>
	);
};
