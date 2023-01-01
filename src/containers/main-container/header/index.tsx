import { Modal } from "antd";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { StoredKeys } from "../../../constants";
import I18, { i18Get } from "../../../i18";
import { Locations } from "../../../locations";
import { setLogin } from "../../user/redux/action";
import "./header.scss";

export const Header: FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userDropDown, setUserDropDown] = useState(false);

	const logout = (): void => {
		const { confirm } = Modal;
		confirm({
			content: <strong> Are you sure you want to logout?</strong>,
			onOk() {
				localStorage.removeItem(StoredKeys.USER_DETAILS);
				dispatch(setLogin({ access: "", refresh: "" }));
			},
			okText: i18Get("Logout", config.lang),
			cancelText: i18Get("Cancel", config.lang)
		});
	};
	
	return (
		<div className="custom_header_container">
			<div className="header_logo_container" style={{ display: "flex" }}>
				<svg className="mr-3" width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0)">
						<rect className="rect-primary-rect" width="80" height="80" rx="16" fill="#1362FC"></rect>
						<circle cx="42" cy="19" r="10" fill="white"></circle>
						<circle cx="75.5" cy="76.5" r="16.5" fill="#12A7FB"></circle>
						<circle cx="5.5" cy="1.5" r="17.5" fill="#1362FC"></circle>
						<circle
							className="rect-primary-rect-1"
							cx="5.5"
							cy="1.5"
							r="16.5"
							stroke="white"
							strokeOpacity="0.66"
							strokeWidth="2"
						></circle>
						{/* <path
							d="M33.7656 87.2159C34.9565 76.5246 37.5874 53.6112 38.5845 47.4881V47.4881C39.1698 43.8941 40.2547 47.2322 39.8692 50.8531C38.9933 59.0813 37.1429 74.1221 35.5121 87.4131C33.1225 106.889 33.3507 95.974 33.7635 88.0818"
							stroke="white"
							strokeWidth="21"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path> */}
					</g>
					<defs>
						<clipPath id="clip0">
							<rect className="rect-primary-rect" width="80" height="80" rx="16" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>
				<h1 style={{ margin: "auto" }}>Travell</h1>
				<svg className="brand-title" width="108" height="68" viewBox="0 0 123 68" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* <path 
						d="M12.376 11.22C9.996 11.22 8.092 12.92 7.616 15.3C7.14 17.544 8.568 19.38 10.948 19.38C13.192 19.38 15.3 17.544 15.776 15.3C16.252 12.92 14.62 11.22 12.376 11.22ZM3.672 36.312L2.652 42.092C1.768 46.988 5.372 51 10.2 51C11.22 51 11.9 50.864 12.104 49.844C12.308 48.416 10.404 46.92 11.152 42.976L14.416 24.072C14.892 21.284 13.464 21.216 10.676 21.216C8.296 21.216 6.256 21.692 5.78 24.072L3.672 36.312ZM30.8651 21.216C29.1651 21.216 27.6011 21.488 26.1731 22.1C25.6291 21.352 24.3371 21.216 22.5011 21.216C20.2571 21.216 18.0811 21.624 17.6051 24.072L13.4571 48.144C13.0491 50.388 14.8851 51 17.1291 51C20.1211 51 21.6851 50.864 22.1611 48.144L25.4931 28.696C26.1051 26.044 28.6211 24.208 30.5251 24.208C32.3611 24.208 33.2451 25.636 32.6331 29.24L30.3891 42.092C29.5051 46.92 32.9051 51 37.9371 51C38.9571 51 39.5691 50.796 39.7731 49.912C39.9771 49.164 39.7731 49.028 39.5691 48.552C38.8211 47.124 38.3451 45.968 38.8891 42.976L41.1331 30.124C41.8811 25.228 38.7531 21.216 33.7891 21.216H30.8651ZM58.6229 21.216C56.9229 21.216 55.3589 21.488 53.9309 22.1C53.3869 21.352 52.0949 21.216 50.2589 21.216C48.0149 21.216 45.8389 21.624 45.3629 24.072L41.2149 48.144C40.8069 50.388 42.6429 51 44.8869 51C47.8789 51 49.4429 50.864 49.9189 48.144L53.2509 28.696C53.8629 26.044 56.3789 24.208 58.2829 24.208C60.1189 24.208 61.0029 25.636 60.3909 29.24L58.1469 42.092C57.2629 46.92 60.6629 51 65.6949 51C66.7149 51 67.3269 50.796 67.5309 49.912C67.7349 49.164 67.5309 49.028 67.3269 48.552C66.5789 47.124 66.1029 45.968 66.6469 42.976L68.8909 30.124C69.6389 25.228 66.5109 21.216 61.5469 21.216H58.6229ZM77.7702 46.24C76.6822 44.948 76.6822 43.316 76.9542 41.616C77.4302 39.916 77.9742 38.556 80.4222 37.536C81.9862 36.788 83.8902 36.72 85.5902 35.428L85.5222 35.972L84.6382 41.072C84.1622 43.588 83.6182 45.22 82.5982 46.24C81.3062 47.532 79.0622 47.804 77.7702 46.24ZM82.6662 51C88.7862 51 92.5262 46.172 93.4102 40.596L94.2262 35.972L95.2462 29.988C96.1302 25.092 92.7982 21.012 87.8342 21.012H82.3942C79.0622 21.012 75.7302 22.848 73.7582 25.568C72.7382 26.928 71.1742 29.58 72.6022 30.804C73.7582 31.824 76.3422 31.688 77.9062 31.484C79.4702 31.28 80.4222 30.94 80.6942 29.104C81.4422 24.548 86.9502 22.236 86.9502 26.928C86.9502 27.472 86.8822 28.084 86.7462 28.832C85.9982 33.048 79.8782 32.64 76.2062 33.932C72.1942 35.224 69.3382 38.556 68.5902 42.364C68.3862 43.384 68.3862 43.86 68.4542 44.88C69.0662 48.416 71.9902 51 76.0022 51H79.3342H82.6662ZM108.845 21.216C103.949 21.216 99.1206 25.228 98.3726 30.124L94.1566 54.332C93.2726 59.772 91.1646 59.84 90.9606 61.064C90.7566 62.084 91.3006 62.356 92.3206 62.356C97.2846 62.356 102.045 58.616 102.929 53.448L103.473 50.252C104.697 50.728 106.057 51 107.485 51H110.341C115.305 51 119.861 46.988 120.745 42.092L122.853 30.124C123.601 25.228 120.473 21.216 115.509 21.216H112.177H108.845ZM106.193 34.612L107.145 29.24C107.689 26.044 108.437 24.412 110.885 24.412C113.129 24.412 114.897 26.18 114.353 29.24L111.973 42.976C111.361 46.512 110.001 48.008 108.097 48.008C106.261 48.008 104.561 46.376 104.629 43.928L106.193 34.612Z" 
						fill="#383838"
					>
					</path> */}
				</svg>
			</div>
			<div className="header_user_container" onClick={() => setUserDropDown(!userDropDown)} onBlur={() => setUserDropDown(false)}>
				<div className="user_drop_container">
					<div className="user_image_box">
						<img src="/images/pic1.8e176ab1.jpg" />
					</div>
					<div className="user_details_box">
						<div className="user_name">Jhone Doe</div>
						<div className="user_role">
							<I18 tkey="Super Admin" />
						</div>
					</div>
				</div>
				{userDropDown ? (
					<div className="user_drop_down_menu">
						<div onClick={() => navigate(Locations.PROFILE)} className="user_drop_down_item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mr-2 text_primary"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
							<I18 tkey="Profile" />
						</div>
						<div onClick={() => logout()} className="user_drop_down_item">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="mr-2 text_danger"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
								<polyline points="16 17 21 12 16 7"></polyline>
								<line x1="21" y1="12" x2="9" y2="12"></line>
							</svg>
							<I18 tkey="Logout" />
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

