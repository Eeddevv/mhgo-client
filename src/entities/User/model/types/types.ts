export interface UserSchema {
  avatar: string | null;
  createdAt: string;
  description: string | null;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  password: string;
  updatedAt: string;
  userId: string;
  followersCount: number;
  followingCount: number;
  isCurrentUserProfile: boolean;
  isFollowing: boolean;
}
