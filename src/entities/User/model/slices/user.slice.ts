import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/types';

const initialState: UserSchema = {
  avatar: null,
  createdAt: '',
  description: null,
  email: '',
  firstName: '',
  password: '',
  updatedAt: '',
  userId: '',
  lastName: '',
  birthday: '',
  phone: '',
  followersCount: 0,
  followingCount: 0,
  isCurrentUserProfile: false,
  isFollowing: false,
};

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserData: (_state, action: PayloadAction<UserSchema>) => {
      return action.payload;
    },
  },
});

export const { actions: usersActions } = UsersSlice;
export const { reducer: usersReducer } = UsersSlice;
