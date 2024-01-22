import { Tabs, TabsProps } from 'antd';
import { UserSchema } from 'entities/User/model/types/types.ts';
import { FC } from 'react';

interface ProfileTabsProps {
  profile: UserSchema;
}

const ProfileTabs: FC<ProfileTabsProps> = ({ profile }) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Обо мне',
      children: profile.description || 'Вы еще не добавили описание профиля',
    },
    {
      key: '2',
      label: 'Ссылки',
      children: 'Вы еще не добавили не одну ссылку',
    },
  ];

  return <Tabs defaultActiveKey='1' items={items} />;
};

export default ProfileTabs;
