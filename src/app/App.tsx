import AppRouter from 'app/providers/Router/AppRouter';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import MainLayout from 'shared/layouts/MainLayout.tsx';
import { useGetUser } from 'entities/User/api/user.api.ts';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch.ts';
import { usersActions } from 'entities/User/model/slices/user.slice.ts';

const App = () => {
  const { data, isLoading } = useGetUser(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        if (data) {
          dispatch(usersActions.setUserData(data));
        }
      } catch (error) {
        console.error('Ошибка инициализации приложения:', error);
      }
    };

    initializeApp();
  }, [data, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ErrorBoundary>
  );
};

export default App;
