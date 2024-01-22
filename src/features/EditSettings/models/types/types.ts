import { UserSchema } from 'entities/User/model/types/types.ts';

export type UpdateProfileBody = Omit<
  UserSchema,
  'createdAt' | 'updatedAt' | 'userId'
>;
