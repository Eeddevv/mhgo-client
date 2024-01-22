import { UserSchema } from 'entities/User/model/types/types.ts';
import { rtkApi } from 'shared/api/rtkApi.ts';

export interface StateSchema {
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
