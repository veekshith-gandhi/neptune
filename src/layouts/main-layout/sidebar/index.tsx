import {
  BuildOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Locations } from '../../../routes';
import './sidebar.scss';

export const Sidebar: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = (): void => {
    const { confirm } = Modal;
    confirm({
      content: <strong> Are you sure you want to logout?</strong>,
      onOk() {
        dispatch({ type: 'LOGOUT' });
        navigate(Locations.LOGIN);
      },
      okText: 'Logout',
      cancelText: 'Cancel',
    });
  };

  return (
    <div
      className="sidebar_container"
      style={{
        minWidth: '240px',
        maxWidth: '240px',
        borderRight: '0.2px solid #80808036',
      }}
    >
      <div
        onClick={() => navigate(Locations.DASHBOARD)}
        className={`sidebar_item ${
          location.pathname === Locations.DASHBOARD ? 'sidebar_item_active' : ''
        }`}
      >
        <DashboardOutlined className="mr-2" />
        Dashboard
      </div>
      <div
        onClick={() => navigate(Locations.ADD_HOTEL)}
        className={`sidebar_item ${
          location.pathname === Locations.ADD_HOTEL ? 'sidebar_item_active' : ''
        }`}
      >
        <BuildOutlined className="mr-2" />
        Add Hotel
      </div>
      <div
        onClick={() => navigate(Locations.PROFILE)}
        className={`sidebar_item ${
          location.pathname === Locations.PROFILE ? 'sidebar_item_active' : ''
        }`}
      >
        <ProfileOutlined className="mr-2" />
        Profile
      </div>
      <div
        onClick={logout}
        className={`sidebar_item ${
          location.pathname === Locations.LOGIN ? 'sidebar_item_active' : ''
        }`}
      >
        <LogoutOutlined className="mr-2" />
        Logout
      </div>
    </div>
  );
};
