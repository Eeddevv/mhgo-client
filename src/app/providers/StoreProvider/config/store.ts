import { configureStore } from '@reduxjs/toolkit';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { usersReducer } from 'entities/User/model/slices/user.slice.ts';
import { rtkApi } from 'shared/api/rtkApi.ts';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: usersReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
