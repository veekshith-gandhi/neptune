import { message } from "antd";
import { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../../config";
import { ResponseType } from "../../../../constants";
import I18, { i18Get } from "../../../../i18";
import { Locations } from "../../../../locations";
import { AppStore } from "../../../../model/store.model";
import { clearVerify, verify } from "../../redux/action";

export const Verify: FunctionComponent = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const userReducer = useSelector((state: AppStore) => state.userReducer);
	
	useEffect(() => {
		if (params.token) {
			dispatch(verify(params.token));
		}
		else {
			message.error(i18Get("Token not found", config.lang));
			navigate(Locations.LOGIN);
		}		
	}, [params.token]);

	useEffect(() => {
		if (userReducer.verifyCompleted === ResponseType.FULFILLED) {
			navigate(Locations.LOGIN);
			dispatch(clearVerify());
		}
		if (userReducer.verifyCompleted === ResponseType.REJECTED) {
			navigate(Locations.LOGIN);
			dispatch(clearVerify());
		}
	}, [userReducer.verifyCompleted]);
    
	return (	
		<div className="login_right_container">
			<div className="login_box">
				<div className="login_head mb-4 text-center">
					<I18 tkey="Sign in your account" />
				</div>
				<div className="login_input_box mb-3">
					<div className="login_label">
						<I18 tkey="Email" />
					</div>
					<div className="login_input_container position-relative">
						<input disabled={true} type="password"/>
					</div>
				</div>
				<div className="login_input_box mb-3">
					<div className="login_label">
						<I18 tkey="Password" />
					</div>
					<div className="login_input_container position-relative">
						<input disabled={true} type="password"/>
					</div>
				</div>
				<div className="text-center pt-3">
					<button disabled={true} className="primary_btn border_radius_10 login_btn">
						<I18 tkey="Verifying..." />
					</button>
				</div>
				<div className="mt-3">
					<I18 tkey="Don't have an account? " />
					<a className="text-primary"><I18 tkey="Sign up" /></a>
				</div>
			</div>
		</div>
	);
};

