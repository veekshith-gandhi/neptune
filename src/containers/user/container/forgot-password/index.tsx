import { message } from 'antd';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '../../../../config';
import { emailRegex, ResponseType } from '../../../../constants';
import I18, { i18Get } from '../../../../i18';
import { AppStore } from '../../../../model/store.model';
import { Locations } from '../../../../routes';
import { ForgotPasswordData } from '../../model';
import { clearForgotPassword, forgotPassword } from '../../redux/action';

export const ForgotPassword: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const userReducer = useSelector((state: AppStore) => state.userReducer);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userReducer.forgotPasswordCompleted === ResponseType.FULFILLED) {
      message.success(
        i18Get('Reset password link will be shared to this email', config.lang)
      );
      navigate(Locations.LOGIN);
      setLoading(false);
      dispatch(clearForgotPassword());
    }
    if (userReducer.forgotPasswordCompleted === ResponseType.REJECTED) {
      setLoading(false);
      dispatch(clearForgotPassword());
    }
  }, [userReducer.forgotPasswordCompleted]);

  const validate = (): boolean => {
    if (
      !emailRef.current?.value ||
      !emailRef.current?.value.trim() ||
      !emailRegex.test(emailRef.current?.value)
    ) {
      setInvalid({ ...invalid, email: true });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      const payload: ForgotPasswordData = {
        email: emailRef.current?.value,
      };
      setLoading(true);
      dispatch(forgotPassword(payload));
    }
  };

  return (
    <div className="login_right_container">
      <div className="login_box">
        <div className="login_head mb-4 text-center">
          <I18 tkey="Submit your mail id" />
        </div>
        <div className="login_input_box mb-3">
          <div className="login_label">
            <I18 tkey="Email" />
          </div>
          <div className="login_input_container position-relative">
            <input
              onChange={() => setInvalid({ ...invalid, email: false })}
              ref={emailRef}
              type="email"
            />
            {invalid.email ? (
              <span className="invalid">
                <I18 tkey="Please enter email" />
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="text-center pt-3">
          <button
            disabled={loading}
            onClick={onSubmit}
            className="primary_btn border_radius_10 login_btn"
          >
            {loading ? <I18 tkey="Loading..." /> : <I18 tkey="Submit" />}
          </button>
        </div>
        <div className="mt-3">
          <I18 tkey="Go back? " />
          <a onClick={() => navigate(Locations.LOGIN)} className="text-primary">
            <I18 tkey="Login" />
          </a>
        </div>
      </div>
    </div>
  );
};
