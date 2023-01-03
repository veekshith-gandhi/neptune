import { useAppSelector } from '../../../store';
import { UserModelReducer } from '../model';

export const useAuthState = () =>
  useAppSelector((state) => state.userReducer) as UserModelReducer;

export const useAccessToken = () =>
  useAppSelector((state) => state?.userReducer?.accessToken || '');

export const useRefreshToken = () =>
  useAppSelector((state) => state?.userReducer?.refreshToken || '');
