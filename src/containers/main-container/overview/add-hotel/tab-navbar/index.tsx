import { Radio } from "antd";
import { FunctionComponent } from "react";
import "./tab-navbar.scss";

export const TabNavigationBar: FunctionComponent = () => {

	return (
		<div className="tabnavbar-main-container">
			<Radio.Group defaultValue="Basic info" buttonStyle="solid">
				{tabList.map(i => {
					return (
						<Radio.Button
							onClick={() => document?.getElementById(i?.id || "")?.scrollIntoView({ behavior: "smooth" })}
							key={i.key}
							value={i.tab}
						>
							{i.tab}
						</Radio.Button>
					);
				})}
			</Radio.Group>
		</div>
	);
};

const tabList = [
	{ tab: "Basic info", key: "tab1" },
	{ tab: "Location", key: "tab2", id: "location-details-ref" },
	{ tab: "Amenities", key: "tab3" },
	{ tab: "Rooms", key: "tab4" },
	{ tab: "Photos", key: "tab5", id: "property-photos-ref" },
	{ tab: "Policies", key: "tab6" },
	{ tab: "Finance & Legal", key: "tab7", id: "finance-legal-ref"  }
];
    