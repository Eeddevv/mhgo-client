import {
  getRouteForbidden,
  AppRoutes,
  getRouteHome,
  getRouteRegister,
  getRouteLogin,
  getRouteProfile,
  getRouteRecords,
  getRouteAboutBusiness,
  getRouteMessenger,
  getRouteNews,
  getRouteSettings,
  getRouteHelp,
} from 'shared/consts/router';
import type { RouteProps } from 'react-router-dom';
import HomePage from 'pages/HomePage/ui/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RecordsPage } from 'pages/RecordsPage';
import { AboutBusinessPage } from 'pages/AboutBusinessPage';
import { MessengerPage } from 'pages/MessengerPage';
import { NewsPage } from 'pages/NewsPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SettingsPage } from 'pages/SettingsPage';
import { HelpPage } from 'pages/HelpPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: getRouteHome(),
    element: <HomePage />,
  },
  [AppRoutes.REGISTER]: {
    path: getRouteRegister(),
    element: <RegisterPage />,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':userId?'),
    element: <ProfilePage />,
  },
  [AppRoutes.RECORDS]: {
    path: getRouteRecords(),
    element: <RecordsPage />,
  },
  [AppRoutes.ABOUT_BUSINESS]: {
    path: getRouteAboutBusiness(),
    element: <AboutBusinessPage />,
  },
  [AppRoutes.NEWS]: {
    path: getRouteNews(),
    element: <NewsPage />,
  },
  [AppRoutes.MESSENGER]: {
    path: getRouteMessenger(),
    element: <MessengerPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    element: <SettingsPage />,
  },
  [AppRoutes.HELP]: {
    path: getRouteHelp(),
    element: <HelpPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
