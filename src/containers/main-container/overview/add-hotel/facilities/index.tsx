import { Card, Radio, Space, Typography } from "antd";
import Progress from "antd/es/progress";
import { FunctionComponent, useState } from "react";
import "./facilities-amenities.scss";

const { Title } = Typography;

const Amenities = [
	{
		id: 1,
		type: "gservice"
	},
	{
		id: 2,
		type: "outdooractivites"
	},
	{
		id: 3,
		type: "common arena"
	},
	{
		id: 4,
		type: "gservice"
	},
	{
		id: 5,
		type: "outdooractivites"
	},
	{
		id: 6,
		type: "common arena"
	}
];
const Amenitiesfacilites = [
	{
		id: 1,
		type: ["gservice", "lservice", "mservice"]
	},
	{
		id: 2,
		type: ["outdooractivites", "indroractivites", "indoroutdooractivites"]
	},
	{
		id: 3,
		type: ["common arena", "normal arena", "simple arena"]
	}
];

export const FacilitiesDetails : FunctionComponent = () => {
	const [storeId, setStoreId] = useState(1);

	return (
		<Card style={{ width: "140vh", height: "600px", margin: "auto" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Title level={4}>Facilites</Title>
					<p>Please select general facilities available at your property</p>
				</div>
				<div>
					<Progress percent={20} status="active" strokeColor={{ from: "#108ee9", to: "#87d068" }} />
					<Space wrap>
						<Progress type="circle" width={50} percent={20} strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }} />
					</Space>
				</div>
			</div>
			
			{/* <Card >
				<p>All Amenities</p>
				<Layout>
					<Sider style={{ background: "#f6f6f6", textAlign: "center" }}>
						<Space>
							<Space direction="vertical">
								{Amenities.map(i => {
									return (
										<Button onClick={() => setStoreId(i.id)} style={{ width: "200px" }} key={i.id}>
											{i.type}
										</Button>
									);
								})}
							</Space>
						</Space>
					</Sider>
					<Layout>
						<Content>
							<Space direction="vertical">
								{Amenitiesfacilites.filter(i => i.id === storeId).map(j => {
									console.log(j.type);
									return <Checkbox key={1}>{j.type}</Checkbox>;
								})}
							</Space>
						</Content>
					</Layout>
				</Layout>
			</Card> */}
			<div style={{ display: "flex" }}>
				<Card title="All Amenities" bordered={true} style={{ width: 200 }}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>    
					<p>Card content</p>
					<p>Card content</p>
				</Card>
				<Card title="Card title" bordered={true} style={{ width: 300 }}>
					<Space direction="vertical">
						<Radio>Card content</Radio>
						<Radio>Card content</Radio>
						<Radio>Card content</Radio>
						<Radio>Card content</Radio>
						<Radio>Card content</Radio>
						<Radio>Card content</Radio>
					</Space>
				</Card>
			</div>
		</Card>
	);
};