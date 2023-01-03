import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ResponseType } from '../../../../constants';
import I18 from '../../../../i18';
import { AppStore } from '../../../../model/store.model';
import { Locations } from '../../../../routes';
import { ResetPasswordDetails, ValidateTokenDetails } from '../../model';
import {
  clearResetPassword,
  clearValidateToken,
  resetPassword,
  validateToken,
} from '../../redux/action';

export const ResetPassword: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [invalid, setInvalid] = useState({
    newPassword: false,
    confirmPassword: false,
    confirmPasswordNotMatch: false,
    passwordNotStrong: false,
  });
  const [loading, setLoading] = useState(true);
  const userReducer = useSelector((state: AppStore) => state.userReducer);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (params.uidb64 && params.token) {
      setLoading(false);
      const payload: ValidateTokenDetails = {
        uidb64: params.uidb64,
        token: params.token,
      };
      dispatch(validateToken(payload));
    } else {
      navigate(Locations.LOGIN);
    }
  }, [params.uidb64, params.token]);

  useEffect(() => {
    if (userReducer.validateTokenCompleted === ResponseType.FULFILLED) {
      setLoading(false);
      dispatch(clearValidateToken());
    }
    if (userReducer.validateTokenCompleted === ResponseType.REJECTED) {
      navigate(Locations.LOGIN);
      setLoading(false);
      dispatch(clearValidateToken());
    }
  }, [userReducer.validateTokenCompleted]);

  useEffect(() => {
    if (userReducer.resetPasswordCompleted === ResponseType.FULFILLED) {
      navigate(Locations.LOGIN);
      setLoading(false);
      dispatch(clearResetPassword());
    }
    if (userReducer.resetPasswordCompleted === ResponseType.REJECTED) {
      navigate(Locations.LOGIN);
      setLoading(false);
      dispatch(clearResetPassword());
    }
  }, [userReducer.resetPasswordCompleted]);

  const validate = (): boolean => {
    if (
      !newPasswordRef.current?.value ||
      !newPasswordRef.current?.value.trim()
    ) {
      setInvalid({ ...invalid, newPassword: true });
      return false;
    }
    if (
      newPasswordRef.current?.value &&
      newPasswordRef.current?.value.length < 6
    ) {
      setInvalid({ ...invalid, passwordNotStrong: true });
      return false;
    }
    if (
      !confirmPasswordRef.current?.value ||
      !confirmPasswordRef.current?.value.trim()
    ) {
      setInvalid({ ...invalid, confirmPassword: true });
      return false;
    }
    if (newPasswordRef.current?.value && confirmPasswordRef.current?.value) {
      if (
        newPasswordRef.current?.value.trim() !==
        confirmPasswordRef.current?.value.trim()
      ) {
        setInvalid({ ...invalid, confirmPasswordNotMatch: true });
        return false;
      }
    }
    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      const payload: ResetPasswordDetails = {
        token: params.token,
        uidb64: params.uidb64,
        password: newPasswordRef.current?.value,
      };
      setLoading(true);
      dispatch(resetPassword(payload));
    }
  };

  return (
    <div className="login_right_container">
      <div className="login_box">
        <div className="login_head mb-4 text-center">
          <I18 tkey="Reset your password" />
        </div>
        <div className="login_input_box mb-3">
          <div className="login_label">
            <I18 tkey="New password" />
          </div>
          <div className="login_input_container position-relative show_password_input_container">
            <input
              onChange={() =>
                setInvalid({
                  ...invalid,
                  newPassword: false,
                  passwordNotStrong: false,
                })
              }
              ref={newPasswordRef}
              type={showNewPassword ? 'text' : 'password'}
            />
            {invalid.newPassword ? (
              <span className="invalid">
                <I18 tkey="Please enter password" />
              </span>
            ) : (
              ''
            )}
            {!invalid.confirmPassword && invalid.passwordNotStrong ? (
              <span className="invalid">
                <I18 tkey="Password must be higher than 6" />
              </span>
            ) : (
              ''
            )}
            {showNewPassword ? (
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="show_password"
              >
                <EyeInvisibleOutlined />
              </span>
            ) : (
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="show_password"
              >
                <EyeOutlined />
              </span>
            )}
          </div>
        </div>
        <div className="login_input_box mb-3">
          <div className="login_label">
            <I18 tkey="Confirm password" />
          </div>
          <div className="login_input_container position-relative show_password_input_container">
            <input
              onChange={() =>
                setInvalid({
                  ...invalid,
                  confirmPassword: false,
                  confirmPasswordNotMatch: false,
                })
              }
              ref={confirmPasswordRef}
              type={showPassword ? 'text' : 'password'}
            />
            {invalid.confirmPassword ? (
              <span className="invalid">
                <I18 tkey="Please enter password" />
              </span>
            ) : (
              ''
            )}
            {!invalid.confirmPassword && invalid.confirmPasswordNotMatch ? (
              <span className="invalid">
                <I18 tkey="Please doesn't match" />
              </span>
            ) : (
              ''
            )}
            {showPassword ? (
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="show_password"
              >
                <EyeInvisibleOutlined />
              </span>
            ) : (
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="show_password"
              >
                <EyeOutlined />
              </span>
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
          <I18 tkey="Remember the password? " />
          <a onClick={() => navigate(Locations.LOGIN)} className="text-primary">
            <I18 tkey="Login" />
          </a>
        </div>
      </div>
    </div>
  );
};
