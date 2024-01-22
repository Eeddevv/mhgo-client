import type { ReactNode } from 'react';
import { createReduxStore } from '../config/store';
import type { StateSchema } from '../config/StateSchema';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
