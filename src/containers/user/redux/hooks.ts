import { useAppSelector } from '../../../store';

export const useAuthState = () => useAppSelector((state) => state.userReducer);

export const useAccessToken = () =>
  useAppSelector((state) => state?.userReducer?.accessToken || '');

export const useRefreshToken = () =>
  useAppSelector((state) => state?.userReducer?.refreshToken || '');
