import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { MainContainer } from './containers/main-container';
import { AuthLayout } from './containers/user';
import { Login } from './containers/user/container/login';
import { SignUp } from './containers/user/container/sign-up';
import { Locations } from './routes';
import { persistor, store } from './store';
import NotFoundView from './views/not-found';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {/* Protected routes */}
            <Route
              path={`${Locations.DASHBOARD}`}
              caseSensitive
              element={<MainContainer />}
            />

            {/* Public Routes / Not Authorized Routes */}
            <Route path={`${Locations.BASEAUTH}`} element={<AuthLayout />}>
              <Route path={Locations.LOGIN} element={<Login />} />
              <Route path={Locations.SIGN_UP} element={<SignUp />} />
              {/* 
            <Route path={Locations.VERIFY} element={<Verify />} />
            <Route
            path={Locations.FORGOT_PASSWORD}
            element={<ForgotPassword />}
            />
            <Route
            path={Locations.RESET_PASSWORD}
            element={<ResetPassword />}
          /> */}
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
