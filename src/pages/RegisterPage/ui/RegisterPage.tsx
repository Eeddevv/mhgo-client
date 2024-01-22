import { Button, Form, Input, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { getRouteLogin, getRouteProfile } from 'shared/consts/router.ts';
import { HEADER_HEIGHT } from 'shared/consts/sizes.ts';
import { useTranslation } from 'react-i18next';
import { RegisterBody } from 'features/RegisterUser/model/types/types.ts';
import { useRegister } from 'features/RegisterUser/api/register.api.ts';
import { useEffect } from 'react';
import { TOKEN_ACCESS } from 'shared/consts/localstorage.ts';

type FieldType = {
  firstName: string;
  email?: string;
  password?: string;
};

const RegisterPage = () => {
  const { t } = useTranslation('auth');
  const [register, { data, isLoading, isError }] = useRegister();
  const handleSubmit = (event: RegisterBody) => {
    const regBody: RegisterBody = {
      firstName: event.firstName,
      email: event.email,
      password: event.password,
    };
    register(regBody);
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem(TOKEN_ACCESS, JSON.stringify(data.access_token));
      window.location.href = getRouteProfile();
    }
  }, [data]);

  return (
    <Space
      style={{
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Form
        layout='vertical'
        name='register'
        style={{
          width: 380,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          background: '#fff',
          padding: 30,
          borderRadius: 10,
          border: '1px solid #DCE1E6',
          textAlign: 'left',
        }}
        initialValues={{ remember: true }}
        autoComplete='off'
        onFinish={handleSubmit}
      >
        <Typography.Title level={2}>{t('register')}</Typography.Title>

        <Form.Item<FieldType>
          style={{ width: '100%', marginTop: 20 }}
          label='Имя'
          name='firstName'
          rules={[
            {
              required: true,
              message: 'Поле не может быть пустым',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          style={{ width: '100%' }}
          label='Email'
          name='email'
          rules={[
            {
              type: 'email',
              required: true,
              message: t('enterCorrectEmail'),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          style={{ width: '100%' }}
          label={t('password')}
          name='password'
          rules={[{ required: true, min: 6, message: t('minLength') }]}
        >
          <Input.Password />
        </Form.Item>

        <Typography.Text>
          {t('haveAccount')}
          <Link style={{ marginLeft: 3 }} to={getRouteLogin()}>
            {t('loginSend')}
          </Link>
        </Typography.Text>

        <Button
          loading={isLoading}
          style={{ marginTop: 10, width: '100%' }}
          type='primary'
          htmlType='submit'
        >
          {t('registerSend')}
        </Button>
        {isError && <Typography.Text type='danger'>Error</Typography.Text>}
      </Form>
    </Space>
  );
};

export default RegisterPage;
