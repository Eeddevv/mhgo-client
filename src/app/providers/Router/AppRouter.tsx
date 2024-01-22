import { memo, Suspense, useCallback } from 'react';
import type { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './config/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<div>Loader...</div>}>{route.element}</Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
