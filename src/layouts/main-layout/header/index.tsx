import { FunctionComponent } from 'react';
import { useAuthState } from '../../../containers/user/redux/hooks';
import I18 from '../../../i18';
import './header.scss';

export const Header: FunctionComponent = () => {
  const { userDetails } = useAuthState();
  let name = userDetails?.email;
  return (
    <div
      className="custom_header_container"
      style={{ borderBottom: '0.2px solid #80808036' }}
    >
      <div className="header_logo_container" style={{ display: 'flex' }}>
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
        <h5 style={{ margin: 'auto' }}>Travel App</h5>
        <svg
          className="brand-title"
          width="108"
          height="68"
          viewBox="0 0 123 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
      <div className="header_user_container">
        <div className="user_drop_container">
          <div className="user_image_box">
            <img src="/images/pic1.8e176ab1.jpg" />
          </div>
          <div className="user_details_box">
            <div className="user_name">{name?.split('@')[0] || 'Admin'}</div>
            <div className="user_role">
              <I18 tkey="Admin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
