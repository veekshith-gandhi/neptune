import { Tabs } from "antd";
import { FunctionComponent } from "react";
import "./tab-navbar.scss";

export const TabNavigationBar: FunctionComponent = () => {

	return (
		<div  className='tabnavbar-main-container' >
			<Tabs type="card" defaultActiveKey="1" className='tabnavbar-container' >
				{tabList.map((tabInfo) => {
					return (
						<Tabs.TabPane tab={tabInfo.tab} key={tabInfo.key} >
						</Tabs.TabPane>
					);
				})}
			</Tabs>
		</div>
	);
};

const tabList = [
	{ tab: "Basic info", key: "tab1" },
	{ tab: "Location", key: "tab2" },
	{ tab: "Amenities", key: "tab3" },
	{ tab: "Rooms", key: "tab4" },
	{ tab: "Photos", key: "tab5" },
	{ tab: "Policies", key: "tab6" },
	{ tab: "Finance & Legal", key: "tab7" }
];
    