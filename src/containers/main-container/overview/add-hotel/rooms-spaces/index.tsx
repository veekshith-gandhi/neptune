import { CaretRightOutlined } from "@ant-design/icons";
import { Card, Col, Collapse, Form, Input, InputNumber, Progress, Row, Select, Space, Typography } from "antd";
import { FunctionComponent } from "react";
const { Title } = Typography;
const Panel = Collapse.Panel;
const { Option } = Select;
const customPanelStyle = {
	background: "#f6f6f6",
	borderRadius: 4,
	marginBottom: 24,
	border: 0,
	overflow: "hidden"
};
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 12 }
};
export const RoomsAndSpacesDetails : FunctionComponent = () => {
	return (
		<Card style={{ width: "140vh", margin: "auto" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Title level={4}>Rooms & Spaces</Title>
					<p>Please include closed rooms and spaces that will be unavailable to guests</p>
				</div>
				<div>
					<Progress percent={40} status="active" strokeColor={{ from: "#108ee9", to: "#87d068" }} />
					<Space wrap>
						<Progress type="circle" width={50} percent={40} strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }} />
					</Space>
				</div>
			</div>
			<Form style={{ padding: 24, minHeight: 360 }} {...layout} layout="vertical">
				<Collapse
					expandIconPosition="right"
					expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? -270 : -180} />}
					bordered={false}
					style={{ background: "#FFFFFF" }}
				>
					<Panel header="Room Details" key="1" style={customPanelStyle}>
						<div style={{ padding: 24, background: "aliceblue" }}>
							<Row gutter={[8, 24]}>
								<Col span={12}>
									<Form.Item label="Room Name" name={["roomname"]} rules={[{ required: true }]}>
										<Input type="name" name="roomname" />
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item label="Room Description" name={["description"]} rules={[{ required: true }]}>
										<Input type="name" name="description" />
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[8, 24]}>
								<Col span={12}>
									<Form.Item label="Rooms Available" name={["numberofrooms"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>

								<Col span={12}>
									<Form.Item label="Room Type" name={["roomtype"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[8, 24]}>
								<Col span={12}>
									<Form.Item label="Bed Type" name={["bedtype"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item label="Meal option" name={["mealoption"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[2, 2]}>
								<Col span={12}>
									<Form.Item label="Smoking allowed" name={["amoking"]} rules={[{ required: true }]}>
										<Select placeholder="select" allowClear>
											<Option value="yes">yes</Option>
											<Option value="no">no</Option>
										</Select>
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item label="View" name={["view"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
							<Row>
								<Col span={12}>
									<Space>
										<InputNumber placeholder="Length" controls={false} />
										<InputNumber placeholder="Breadth" controls={false} />
										<Select placeholder="select Number" allowClear>
											<Option value="squareft">sq.ft</Option>
										</Select>
									</Space>
								</Col>
							</Row>
						</div>
					</Panel>
				</Collapse>
				<Collapse
					expandIconPosition="right"
					expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? -270 : -180} />}
					bordered={false}
					style={{ background: "#FFFFFF" }}
				>
					<Panel header="Room Details" key="1" style={customPanelStyle}>
						<div style={{ padding: 24, background: "aliceblue" }}>
							<Row gutter={[8, 24]}>
								<Col span={12}>
									<Form.Item label="Base Occupancy" name={["baseoccupancy"]} rules={[{ required: true }]}>
										<Input type="tel" name="roomname" />
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item label="Room Description" name={["description"]} rules={[{ required: true }]}>
										<Input type="name" name="description" />
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[8, 24]}>
								<Col span={12}>
									<Form.Item label="Rooms Available" name={["numberofrooms"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>

								<Col span={12}>
									<Form.Item label="Room Type" name={["roomtype"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[8, 24]}>
								<Col span={12}>
									<Form.Item label="Bed Type" name={["bedtype"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item label="Meal option" name={["mealoption"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={[2, 2]}>
								<Col span={12}>
									<Form.Item label="Smoking allowed" name={["amoking"]} rules={[{ required: true }]}>
										<Select placeholder="select" allowClear>
											<Option value="yes">yes</Option>
											<Option value="no">no</Option>
										</Select>
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item label="View" name={["view"]} rules={[{ required: true }]}>
										<Select placeholder="select Number" allowClear>
											<Option value="1">1</Option>
											<Option value="2">2</Option>
											<Option value="3">3</Option>
											<Option value="4">4</Option>
											<Option value="5">5</Option>
										</Select>
									</Form.Item>
								</Col>
							</Row>
							<Row>
								<Col span={12}>
									<Space>
										<InputNumber placeholder="Length" controls={false} />
										<InputNumber placeholder="Breadth" controls={false} />
										<Select placeholder="select Number" allowClear>
											<Option value="squareft">sq.ft</Option>
										</Select>
									</Space>
								</Col>
							</Row>
						</div>
					</Panel>
				</Collapse>
			</Form>
		</Card>
	);
};