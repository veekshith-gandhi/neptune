import "antd/dist/antd.min.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/color.scss";
import "./assets/font.scss";
import { setupInterceptors } from "./middleware/network";
import "./styles.scss";

setupInterceptors();


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
	<StrictMode>
		<App/>
	</StrictMode>

);


