import { Button, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRouteHome } from 'shared/consts/router.ts';

const NotFoundPage = () => {
  const { t } = useTranslation('errors');

  return (
    <Space
      direction='vertical'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography.Title
        style={{ fontSize: '140px', fontWeight: 700, marginBottom: 0 }}
      >
        404
      </Typography.Title>
      <Typography.Title level={3}>{t('notFound')}</Typography.Title>
      <Link to={getRouteHome()}>
        <Button type='primary'>{t('backToPage')}</Button>
      </Link>
    </Space>
  );
};

export default NotFoundPage;
