import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailRegex, ResponseType, StoredKeys } from "../../../../constants";
import I18 from "../../../../i18";
import { Locations } from "../../../../locations";
import { AppStore } from "../../../../model/store.model";
import { LoginDetails } from "../../model";
import { clearLogin, login, setLogin } from "../../redux/action";
import "./login.scss";

export const Login: FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [invalid, setInvalid] = useState({ email: false, password: false });
	const [loading, setLoading] = useState(false);
	const userReducer = useSelector((state: AppStore) => state.userReducer);
	const emailRef = useRef<HTMLInputElement>(null);
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
		if (!emailRef.current?.value ||  !emailRef.current?.value.trim() || !emailRegex.test(emailRef.current?.value)) {
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
				email: emailRef.current?.value,
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
						<I18 tkey="Email" />
					</div>
					<div className="login_input_container position-relative">
						<input onChange={() => setInvalid({ ...invalid, email: false })} ref={emailRef} type="email"/>
						{invalid.email ? <span className="invalid"><I18 tkey="Please enter email" /></span> : ""}
					</div>
				</div>
				<div className="login_input_box mb-3">
					<div className="login_label">
						<I18 tkey="Password" />
					</div>
					<div className="login_input_container position-relative show_password_input_container">
						<input onChange={() => setInvalid({ ...invalid, password: false })} ref={passwordRef} type={showPassword ? "text" : "password"}/>
						{invalid.password ? <span className="invalid"><I18 tkey="Please enter password" /></span> : ""}
						{showPassword ? 
							<span onClick={() => setShowPassword(!showPassword)} className="show_password"><EyeInvisibleOutlined /></span> 
							: 
							<span onClick={() => setShowPassword(!showPassword)} className="show_password"><EyeOutlined /></span>
						}
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

