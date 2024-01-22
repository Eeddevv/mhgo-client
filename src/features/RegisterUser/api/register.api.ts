import { rtkApi } from 'shared/api/rtkApi';
import { RegisterBody } from 'features/RegisterUser/model/types/types.ts';

const registerApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<{ access_token: string }, RegisterBody>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});
export const useRegister = registerApi.useRegisterMutation;
