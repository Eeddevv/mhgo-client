import { rtkApi } from 'shared/api/rtkApi';
import {
  PublicationCreateBody,
  PublicationSchema,
} from 'entities/Publications/model/types/types.ts';

const publicationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createPublication: build.mutation<PublicationSchema, PublicationCreateBody>(
      {
        query: (body) => {
          return {
            url: `/publications`,
            method: 'POST',
            body: body,
          };
        },
      }
    ),
    getAllPublications: build.mutation<
      PublicationSchema[],
      { creatorId?: string }
    >({
      query: (args: { creatorId?: string }) => {
        const creatorId = args?.creatorId || '';
        return {
          url: `/publications/${creatorId}`,
          method: 'GET',
        };
      },
    }),
  }),
});
export const useCreatePublication = publicationApi.useCreatePublicationMutation;
export const useGetAllPublications =
  publicationApi.useGetAllPublicationsMutation;
