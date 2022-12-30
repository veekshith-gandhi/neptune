import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Card, Collapse, Form, Progress, Space, Typography, Upload, UploadProps } from "antd";
import AntdImgCrop from "antd-img-crop";
import type { UploadFile } from "antd/es/upload/interface";
const Panel = Collapse.Panel;

import { FunctionComponent, useState } from "react";
import { uploadHotelImage } from "../../../../../services/hotel-form-api-service";

const { Title } = Typography;
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
// const props: UploadProps = {
	// beforeUpload: file => {
// const isPNG = file.type === "image/png";
// if (!isPNG) {
// message.error(`${file.name} is not a png file`);
// }
// return isPNG || Upload.LIST_IGNORE;
	// }
	// onChange: info => {
	// 	console.log(info.fileList);
	// }
// };

export const PropertyPhotos : FunctionComponent = () => {
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	}; 


	return (
		<Card style={{ width: "140vh", margin: "auto" }}>
			<div id="property-photos-ref" style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Title level={4}>Photos</Title>
					<p>Add quality photos showcase all your property</p>
				</div>
				<div>
					<Progress percent={40} status="active" strokeColor={{ from: "#108ee9", to: "#87d068" }} />
					<Space wrap>
						<Progress type="circle" width={50} percent={40} strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }} />
					</Space>
				</div>
			</div>
			<Form style={{ padding: 24, minHeight: 360 }} {...layout} layout="vertical" >
				<Collapse
					expandIconPosition="right"
					expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? -270 : -180} />}
					bordered={false}
					style={{ background: "#FFFFFF" }}
				>
					<Panel header="Single" key="1" style={customPanelStyle}>
						<div style={{ padding: 24, background: "aliceblue" }}>
							<Form.Item label="upload images" name={["singlepropertyimage"]}>
								{/* <AntdImgCrop rotate> */}
								<Upload
									customRequest={async (options) => {
										const formData = new FormData();
										formData.append("file", options.file);
										formData.append("hotel", "922527ab-0be7-4751-a5a1-13bd2c7fa29d");
										await uploadHotelImage(formData);
									}}
									listType="picture-card"
									name="file"
									fileList={fileList}
									
								>
									{fileList.length < 5 && "+ Upload"}
								</Upload>
								{/* </AntdImgCrop> */}
							</Form.Item>
						</div>
					</Panel>
					<Panel header="Delux" key="2" style={customPanelStyle}>
						<div style={{ padding: 24, background: "aliceblue" }}>
							<Form.Item label="upload images" name={["deluxpropertyimage"]}>
								<AntdImgCrop rotate>
									<Upload
										listType="picture-card"
										name="deluxpropertyimage"
										fileList={fileList}
										
									>
										{fileList.length < 5 && "+ Upload"}
									</Upload>
								</AntdImgCrop>
							</Form.Item>
						</div>
					</Panel>
					<Panel header="Mix" key="3" style={customPanelStyle}>
						<div style={{ padding: 24, background: "aliceblue" }}>
							<Form.Item label="upload images" name={["mixpropertyimage"]}>
								<AntdImgCrop rotate>
									<Upload
										listType="picture-card"
										name="mixpropertyimage"
										fileList={fileList}
										
									>
										{fileList.length < 5 && "+ Upload"}
									</Upload>
								</AntdImgCrop>
							</Form.Item>
						</div>
					</Panel>
				</Collapse>
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