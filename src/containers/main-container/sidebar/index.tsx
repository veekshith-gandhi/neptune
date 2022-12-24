import { FunctionComponent } from "react";
import { Locations } from "../../../locations";
import { DashboardOutlined, ProfileOutlined, BuildOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

export const Sidebar: FunctionComponent = () => {
	const navigate = useNavigate();
	
	return (	
		<div className="sidebar_container">
			<div 
				onClick={() => navigate(Locations.DASHBOARD)}
				className={`sidebar_item ${location.pathname === Locations.DASHBOARD ? "sidebar_item_active" : ""}`}
			>
				<DashboardOutlined className="mr-2"/>
				Dashboard
			</div>
			<div 
				onClick={() => navigate(Locations.ADD_HOTEL)}
				className={`sidebar_item ${location.pathname === Locations.ADD_HOTEL ? "sidebar_item_active" : ""}`}
			>
				<BuildOutlined className="mr-2"/>
				Add Hotel
			</div>
			<div 
				onClick={() => navigate(Locations.PROFILE)}
				className={`sidebar_item ${location.pathname === Locations.PROFILE ? "sidebar_item_active" : ""}`}
			>
				<ProfileOutlined className="mr-2"/>
				Profile
			</div>
		</div>
	);
};

