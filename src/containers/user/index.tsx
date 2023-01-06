import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import I18 from '../../i18';

export const AuthLayout: FunctionComponent = () => {
  return (
    <div className="login_container">
      <div className="login_left_container">
        <div className="login_welcome_box">
          <div className="text-center mb-4 pt-5">
            <svg
              className="mr-3"
              width="60"
              height="60"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <rect
                  className="rect-primary-rect"
                  width="80"
                  height="80"
                  rx="16"
                  fill="#1362FC"
                ></rect>
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
                <path
                  d="M33.7656 87.2159C34.9565 76.5246 37.5874 53.6112 38.5845 47.4881V47.4881C39.1698 43.8941 40.2547 47.2322 39.8692 50.8531C38.9933 59.0813 37.1429 74.1221 35.5121 87.4131C33.1225 106.889 33.3507 95.974 33.7635 88.0818"
                  stroke="white"
                  strokeWidth="21"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    className="rect-primary-rect"
                    width="80"
                    height="80"
                    rx="16"
                    fill="white"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <p style={{ fontSize: 23, textAlign: 'center', color: 'black' }}>
              Travell App
            </p>
          </div>
          <div className="login_welcome_text_box mb-5">
            <h3 className="login_welcome_text mb-2">
              <I18 tkey="Welcome back!" />
            </h3>
            <div className="login_welcome_desc">
              <I18 tkey="User Experience & Interface Design Strategy SaaS Solutions" />
            </div>
          </div>
          <img
            className="login_welcome_image"
            src="/images/login-welcome.png"
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
