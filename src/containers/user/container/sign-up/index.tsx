import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailRegex, ResponseType } from "../../../../constants";
import I18 from "../../../../i18";
import { Locations } from "../../../../locations";
import { AppStore } from "../../../../model/store.model";
import { SignUpDetails } from "../../model";
import { clearSignUp, signUp } from "../../redux/action";

export const SignUp: FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [invalid, setInvalid] = useState({ userName: false, email: false, password: false, confirmPassword: false, confirmPasswordNotMatch: false });
	const [loading, setLoading] = useState(false);
	const userReducer = useSelector((state: AppStore) => state.userReducer);
	const userNameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (userReducer.signUpCompleted === ResponseType.FULFILLED) {
			setLoading(false);
			navigate(Locations.LOGIN);
			dispatch(clearSignUp());
		}
		if (userReducer.signUpCompleted === ResponseType.REJECTED) {
			setLoading(false);
			dispatch(clearSignUp());
		}
	}, [userReducer.signUpCompleted]);

	const validate = (): boolean => {
		if (!userNameRef.current?.value || !userNameRef.current?.value.trim()) {
			setInvalid( { ...invalid, userName: true });
			return false;
		}
		if (!emailRef.current?.value || !emailRef.current?.value.trim() || !emailRegex.test(emailRef.current?.value)) {
			setInvalid( { ...invalid, email: true });
			return false;
		}
		if (!passwordRef.current?.value || !passwordRef.current?.value.trim()) {
			setInvalid( { ...invalid, password: true });
			return false;
		}
		if (!confirmPasswordRef.current?.value || !confirmPasswordRef.current?.value.trim()) {
			setInvalid( { ...invalid, confirmPassword: true });
			return false;
		}
		if (passwordRef.current?.value && confirmPasswordRef.current?.value) {
			if (passwordRef.current?.value.trim() !== confirmPasswordRef.current?.value.trim()) {
				setInvalid( { ...invalid, confirmPasswordNotMatch: true });
				return false;
			}
		}
		return true;
	};

	const onLogin = () => {
		if (validate()) {
			const payload: SignUpDetails = {
				username: userNameRef.current?.value,
				email: emailRef.current?.value,
				password1: passwordRef.current?.value,
				password2: confirmPasswordRef.current?.value
			};
			setLoading(true);
			dispatch(signUp(payload));
		}
	};
    
	return (	
		<div className="login_right_container">
			<div className="login_box">
				<div className="login_head mb-4 text-center">
					<I18 tkey="Register your account" />
				</div>
				<div className="login_input_box mb-3">
					<div className="login_label">
						<I18 tkey="Username" />
					</div>
					<div className="login_input_container position-relative">
						<input onChange={() => setInvalid({ ...invalid, userName: false })} ref={userNameRef} type="text"/>
						{invalid.userName ? <span className="invalid"><I18 tkey="Please enter username" /></span> : ""}
					</div>
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
					<div className="login_input_container position-relative">
						<input onChange={() => setInvalid({ ...invalid, password: false })} ref={passwordRef} type="password"/>
						{invalid.password ? <span className="invalid"><I18 tkey="Please enter password" /></span> : ""}
					</div>
				</div>
				<div className="login_input_box mb-3">
					<div className="login_label">
						<I18 tkey="Confirm Password" />
					</div>
					<div className="login_input_container position-relative">
						<input onChange={() => setInvalid({ ...invalid, confirmPassword: false, confirmPasswordNotMatch: false })} ref={confirmPasswordRef} type="password"/>
						{invalid.confirmPassword ? <span className="invalid"><I18 tkey="Please enter password" /></span> : ""}
						{!invalid.confirmPassword && invalid.confirmPasswordNotMatch ? <span className="invalid"><I18 tkey="Please doesn't match" /></span> : ""}
					</div>
				</div>
				<div className="text-center pt-3">
					<button disabled={loading} onClick={onLogin} className="primary_btn border_radius_10 login_btn">
						{loading ? 
							<I18 tkey="Loading..." />
							:
							<I18 tkey="Sign up" />
						}
					</button>
				</div>
				<div className="mt-3">
					<I18 tkey="Already have an account? " />
					<a onClick={() => navigate(Locations.LOGIN)} className="text-primary"><I18 tkey="Login" /></a>
				</div>
			</div>
		</div>
	);
};

