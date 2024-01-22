import { Avatar, Space, Typography } from 'antd';
import { UserSchema } from 'entities/User/model/types/types.ts';
import { FC } from 'react';

interface ProfileInfoProps {
  profile: UserSchema;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ profile }) => {
  return (
    <Space style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar size={74} />
      <Space direction='vertical'>
        <Typography.Title level={3} style={{ lineHeight: '100%' }}>
          {profile.firstName} {profile.lastName}
        </Typography.Title>
        <Typography.Text>Мастер</Typography.Text>
      </Space>
    </Space>
  );
};

export default ProfileInfo;
