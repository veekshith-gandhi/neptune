import "antd/dist/antd.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./assets/color.scss";
import "./assets/font.scss";
import { setupInterceptors } from "./middleware/network";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./router";
import { store } from "./store";
import "./styles.scss";

setupInterceptors();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
