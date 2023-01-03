import { Button, Result } from 'antd';
import type { FC } from 'react';
import { useAuthState } from '../containers/user/redux/hooks';

const NotFoundView: FC = () => {
  const {} = useAuthState();

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
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default NotFoundView;
