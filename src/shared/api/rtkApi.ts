import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { TOKEN_ACCESS } from 'shared/consts/localstorage.ts';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3000' });

const baseQueryWithReauth: BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const token = localStorage.getItem(TOKEN_ACCESS);
  const parsedToken = token ? JSON.parse(token) : null;
  const modifiedArgs = {
    ...args,
    headers: {
      token_access: parsedToken ?? '',
    },
  };
  return baseQuery(modifiedArgs, api, extraOptions);
};

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}),
});
