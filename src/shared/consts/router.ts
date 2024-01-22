export enum AppRoutes {
  HOME = 'home',
  PROFILE = 'profile',
  RECORDS = 'records',
  NEWS = 'news',
  ABOUT_BUSINESS = 'about_business',
  MESSENGER = 'messenger',
  REGISTER = 'register',
  LOGIN = 'login',
  FORBIDDEN = 'forbidden',
  SETTINGS = 'settings',
  HELP = 'help',
  NOT_FOUND = 'not_found',
}

export const getRouteLogin = () => '/auth/login';
export const getRouteRegister = () => '/auth/register';
export const getRouteProfile = (userId?: string) => {
  return userId ? `/profile/${userId}` : `/profile/`;
};
export const getRouteRecords = () => '/records';
export const getRouteNews = () => '/news';
export const getRouteAboutBusiness = () => '/about_business';
export const getRouteMessenger = () => '/messenger';
export const getRouteHome = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteHelp = () => '/help';
export const getRouteForbidden = () => '/forbidden';
