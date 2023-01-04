import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Profile } from './containers/main-container/overview/profile';
import { AuthLayout } from './containers/user';
import { ForgotPassword } from './containers/user/container/forgot-password';
import { Login } from './containers/user/container/login';
import { ResetPassword } from './containers/user/container/reset-password';
import { SignUp } from './containers/user/container/sign-up';
import { Verify } from './containers/user/container/verify';
import MainLayout from './layouts/main-layout';
import { Locations } from './routes';
import { persistor, store } from './store';
import DashboardView from './views/dashboard';
import { AddHotelComponent } from './views/hotel/container';
import NotFoundView from './views/not-found';

import './styles/main.scss';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {/* Public Routes / Not Authorized Routes */}
            <Route path={`${Locations.BASEAUTH}`} element={<AuthLayout />}>
              <Route path={Locations.LOGIN} element={<Login />} />
              <Route path={Locations.SIGN_UP} element={<SignUp />} />
              <Route path={Locations.VERIFY} element={<Verify />} />
              <Route
                path={Locations.FORGOT_PASSWORD}
                element={<ForgotPassword />}
              />
              <Route
                path={Locations.RESET_PASSWORD}
                element={<ResetPassword />}
              />
            </Route>

            {/* Protected routes */}
            <Route path={''} element={<MainLayout />}>
              <Route
                path={Locations.DASHBOARD}
                caseSensitive
                element={<DashboardView />}
              />
              <Route
                path={Locations.ADD_HOTEL}
                element={<AddHotelComponent />}
              />
              <Route path={Locations.PROFILE} element={<Profile />} />
              <Route
                path="*"
                element={<Navigate to={Locations.DASHBOARD} replace />}
              />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
