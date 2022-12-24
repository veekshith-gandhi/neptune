import { FunctionComponent } from "react";
import { Header } from "./header";
import "./main-container.scss";
import { Overview } from "./overview";
import { Sidebar } from "./sidebar";

export const MainContainer: FunctionComponent  = () =>  {
	return (
		<>
			<Header />
			<div className="main_container">
				<Sidebar />
				<Overview />
			</div>
		</>
	);
};