import { rtkApi } from 'shared/api/rtkApi';
import { UserSchema } from 'entities/User/model/types/types.ts';
import { UpdateProfileBody } from 'features/EditSettings/models/types/types.ts';

const settingsProfileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    editInfo: build.mutation<UserSchema, UpdateProfileBody>({
      query: (body) => ({
        url: '/users/profile',
        method: 'PATCH',
        body: body,
      }),
    }),
  }),
});
export const useEditInfo = settingsProfileApi.useEditInfoMutation;
