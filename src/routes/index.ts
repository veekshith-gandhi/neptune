export enum Locations {
  DASHBOARD = '/',
  BASEAUTH = '/auth',
  LOGIN = '/auth/login',
  SIGN_UP = '/auth/sign-up',
  VERIFY = '/auth/verify-email/:token',
  FORGOT_PASSWORD = '/auth/forgot-password',
  ADD_HOTEL = '/add-hotel',
  PROFILE = '/profile',
  RESET_PASSWORD = '/reset-password/:uidb64/:token',
}
