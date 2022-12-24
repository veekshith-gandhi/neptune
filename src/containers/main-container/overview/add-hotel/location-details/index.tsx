import { Card, Progress, Space, Typography } from "antd";

import { FunctionComponent } from "react";
import { FormDetails } from "./formdetails";
import { GoogleMaps } from "./googlemap";

const { Title } = Typography;
export const LocationDetails : FunctionComponent = () => {
	return (
		<Card style={{ width: "140vh", margin: "auto" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Title level={4}>Location Details</Title>
					<p>Please fill in basic details of your property</p>
				</div>
				<div>
					<Progress percent={40} status="active" strokeColor={{ from: "#108ee9", to: "#87d068" }} />
					<Space wrap>
						<Progress type="circle" width={50} percent={40} strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }} />
					</Space>
				</div>
			</div>
			<GoogleMaps />
			<FormDetails/>
		</Card>
	);
};