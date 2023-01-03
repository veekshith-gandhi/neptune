import { Button, Result } from 'antd';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../containers/user/redux/hooks';

const NotFoundView: FC = () => {
  const { isLogged } = useAuthState();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={isLogged ? '/' : '/auth/login'}>
            <Button type="primary">
              {isLogged ? 'Back Dashboard' : 'Go to Auth'}
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFoundView;
