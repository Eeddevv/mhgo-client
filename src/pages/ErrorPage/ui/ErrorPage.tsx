import { Button, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRouteHome } from 'shared/consts/router.ts';

const ErrorPage = () => {
  const { t } = useTranslation('errors');

  return (
    <Space
      direction='vertical'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography.Title level={1} style={{ fontWeight: 700, marginBottom: 0 }}>
        {t('errorBoundaryTitle')}
      </Typography.Title>
      <Button
        onClick={() => window.location.reload()}
        style={{ marginTop: 40 }}
      >
        {t('reloadPage')}
      </Button>
      <Link to={getRouteHome()}>
        <Button style={{ width: 190 }} type='primary'>
          {t('backToPage')}
        </Button>
      </Link>
    </Space>
  );
};

export default ErrorPage;
