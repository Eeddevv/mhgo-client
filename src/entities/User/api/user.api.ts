import { rtkApi } from 'shared/api/rtkApi';
import { UserSchema } from 'entities/User/model/types/types.ts';

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<UserSchema, { userId?: string }>({
      query: (args) => {
        const userId = args?.userId || '';
        return {
          url: `/users/profile/${userId}`,
          method: 'GET',
        };
      },
    }),
  }),
});
export const useGetUser = userApi.useGetUserQuery;
