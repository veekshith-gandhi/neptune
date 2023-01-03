export enum Locations {
  // Auth
  BASEAUTH = '/auth',
  LOGIN = '/auth/login',
  SIGN_UP = '/auth/sign-up',
  VERIFY = '/auth/verify-email/:token',
  RESET_PASSWORD = '/auth/reset-password/:uidb64/:token',
  FORGOT_PASSWORD = '/auth/forgot-password',

  // Protected
  DASHBOARD = '/',
  ADD_HOTEL = '/add-hotel',
  PROFILE = '/profile',
}
