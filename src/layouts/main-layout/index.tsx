import { Fragment, FunctionComponent, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthState } from '../../containers/user/redux/hooks';
import { Header } from './header';
import { Sidebar } from './sidebar';

const MainLayout: FunctionComponent = () => {
  const { isLogged } = useAuthState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/auth/login');
    }
  }, [isLogged]);

  return (
    <Fragment>
      <Header />
      <div className="main_container">
        <Sidebar />
        <main className="main_content_container" style={{ minHeight: '100vh' }}>
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
};

export default MainLayout;
