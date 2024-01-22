import { rtkApi } from 'shared/api/rtkApi';

const followingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    subscribeUser: build.mutation<number, { userId: string }>({
      query: (args) => {
        const userId = args?.userId || '';
        return {
          url: `/subscriptions/${userId}`,
          method: 'POST',
        };
      },
    }),
    unsubscribeUser: build.mutation<number, { userId: string }>({
      query: (args) => {
        const userId = args?.userId || '';
        return {
          url: `/subscriptions/${userId}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});
export const useSubscribeUser = followingApi.useSubscribeUserMutation;
export const useUnsubscribeUser = followingApi.useUnsubscribeUserMutation;
