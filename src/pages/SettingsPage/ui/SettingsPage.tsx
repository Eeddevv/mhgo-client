import { Button, Space, Tabs, TabsProps } from 'antd';
import { EditSettingsProfile } from 'features/EditSettings';

const items: TabsProps['items'] = [
  {
    label: 'Мой профиль',
    key: 'Мой профиль',
    children: <EditSettingsProfile />,
  },
  {
    label: 'Адрес',
    key: 'Адрес',
    children: 'Content of Tab 1',
  },
  {
    label: 'Подтверждение профиля',
    key: 'Подтверждение профиля',
    children: 'Content of Tab 1',
  },
  {
    label: 'Уведомления',
    key: 'Уведомления',
    children: 'Content of Tab 1',
  },
  {
    label: 'Финансы',
    key: 'Финансы',
    children: 'Content of Tab 1',
  },
  {
    label: 'Безопасность',
    key: 'Безопасность',
    children: 'Content of Tab 1',
  },
];

const SettingsPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Space
        style={{
          background: '#fff',
          padding: '5px 0',
          borderRadius: 10,
          border: '1px solid #DCE1E6',
          maxWidth: '70%',
        }}
      >
        <Tabs
          style={{ width: '100%' }}
          defaultActiveKey='Мой профиль'
          items={items}
          tabPosition='left'
        />
      </Space>
      <Space style={{ marginTop: 20 }}>
        <Button type='primary' danger>
          Удалить аккаунт
        </Button>
      </Space>
    </div>
  );
};

export default SettingsPage;
