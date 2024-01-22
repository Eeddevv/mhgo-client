import { Tabs, TabsProps } from 'antd';
import PublicationList from 'widgets/PublicationList/ui/PublicationList.tsx';
import { PublicationSchema } from 'entities/Publications/model/types/types.ts';
import { FC } from 'react';

interface ProfileNavigationProps {
  publications: PublicationSchema[];
}
const ProfileNavigation: FC<ProfileNavigationProps> = ({ publications }) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Публикации',
      children: <PublicationList publications={publications} />,
    },
    {
      key: 'Мероприятия',
      label: 'Мероприятия',
      children: 'Вы еще не добавили не одну ссылку',
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey='1' items={items} />
    </div>
  );
};

export default ProfileNavigation;
