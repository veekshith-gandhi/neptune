import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ResponseType, StoredKeys } from "../../../../constants";
import I18 from "../../../../i18";
import { Locations } from "../../../../locations";
import { AppStore } from "../../../../model/store.model";
import { LoginDetails } from "../../model";
import { clearLogin, login, setLogin } from "../../redux/action";
import "./login.scss";

export const Login: FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [invalid, setInvalid] = useState({ email: false, password: false });
	const [loading, setLoading] = useState(false);
	const userReducer = useSelector((state: AppStore) => state.userReducer);
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (userReducer.loginCompleted === ResponseType.FULFILLED) {
			localStorage.setItem(StoredKeys.USER_DETAILS, window.btoa(JSON.stringify(userReducer.loginDetails)));
			dispatch(setLogin(userReducer.loginDetails));
			navigate(Locations.DASHBOARD);
			setLoading(false);
			dispatch(clearLogin());
		}
		if (userReducer.loginCompleted === ResponseType.REJECTED) {
			setLoading(false);
			dispatch(clearLogin());
		}
	}, [userReducer.loginCompleted]);

	const validate = (): boolean => {
		if (!usernameRef.current?.value ||  !usernameRef.current?.value.trim()) {
			setInvalid( { ...invalid, email: true });
			return false;
		}
		if (!passwordRef.current?.value || !passwordRef.current?.value.trim()) {
			setInvalid( { ...invalid, password: true });
			return false;
		}
		return true;
	};

	const onLogin = () => {
		if (validate()) {
			const payload: LoginDetails = {
				username: usernameRef.current?.value,
				password: passwordRef.current?.value
			};
			setLoading(true);
			dispatch(login(payload));
		}
	};
    
	return (	
		<div className="login_right_container">
			<div className="login_box">
				<div className="login_head mb-4 text-center">
					<I18 tkey="Sign in your account" />
				</div>
				<div className="login_input_box mb-3">
					<div className="login_label">
						<I18 tkey="Username" />
					</div>
					<div className="login_input_container position-relative">
						<input onChange={() => setInvalid({ ...invalid, email: false })} ref={usernameRef} type="email"/>
						{invalid.email ? <span className="invalid"><I18 tkey="Please enter email" /></span> : ""}
					</div>
				</div>
				<div className="login_input_box mb-3">
					<div className="login_label">
						<I18 tkey="Password" />
					</div>
					<div className="login_input_container position-relative">
						<input onChange={() => setInvalid({ ...invalid, password: false })} ref={passwordRef} type="password"/>
						{invalid.password ? <span className="invalid"><I18 tkey="Please enter password" /></span> : ""}
					</div>
				</div>
				<div className="mt-3 text-right">
					<a onClick={() => navigate(Locations.FORGOT_PASSWORD)} className="text-primary"><I18 tkey="Forgot password" /></a>
				</div>
				<div className="text-center pt-3">
					<button disabled={loading} onClick={onLogin} className="primary_btn border_radius_10 login_btn">
						{loading ? 
							<I18 tkey="Loading..." />
							:
							<I18 tkey="Login" />
						}
					</button>
				</div>
				<div className="mt-3">
					<I18 tkey="Don't have an account? " />
					<a onClick={() => navigate(Locations.SIGN_UP)} className="text-primary"><I18 tkey="Sign up" /></a>
				</div>
			</div>
		</div>
	);
};

