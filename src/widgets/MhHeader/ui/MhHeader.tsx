import { Header } from 'antd/lib/layout/layout';
import { HEADER_HEIGHT } from 'shared/consts/sizes.ts';
import { CSSProperties } from 'react';
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Form,
  Image,
  Input,
  MenuProps,
  Row,
  Space,
} from 'antd';
import logo from 'shared/assets/logo.svg';
import { Link } from 'react-router-dom';
import {
  getRouteHelp,
  getRouteHome,
  getRouteLogin,
  getRouteRegister,
  getRouteSettings,
} from 'shared/consts/router.ts';
import {
  LogoutOutlined,
  MenuOutlined,
  QuestionOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User/model/selectors/getUserData.ts';

const headerStyles: CSSProperties = {
  height: HEADER_HEIGHT,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: '#fff',
  borderBottom: '1px solid #DCE1E6',
};
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to={getRouteSettings()}>
        <SettingOutlined style={{ marginRight: 3 }} />
        Настройки
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={getRouteHelp()}>
        <QuestionOutlined style={{ marginRight: 3 }} />
        Поддержка
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Button type='primary' danger icon={<LogoutOutlined />}>
        Выйти
      </Button>
    ),
  },
];

const MhHeader = () => {
  const user = useSelector(getUserData);

  return (
    <Header style={headerStyles}>
      <Row
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
          span={12}
        >
          <Link to={getRouteHome()}>
            <Image width={150} src={logo} preview={false} alt='logo' />
          </Link>
          <Button
            style={{ marginLeft: 30 }}
            icon={<MenuOutlined />}
            type='primary'
          >
            Я ищу
          </Button>
          <Form style={{ marginLeft: 20, width: '100%' }}>
            <Space.Compact style={{ width: '100%' }}>
              <Input placeholder='Найти в masterhubGo' />
              <Button>
                <SearchOutlined />
              </Button>
            </Space.Compact>
          </Form>
        </Col>
        {!user.userId ? (
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            span={12}
          >
            <Link to={getRouteLogin()}>Вход</Link>
            <Link style={{ marginLeft: 10 }} to={getRouteRegister()}>
              Регистрация
            </Link>
          </Col>
        ) : (
          <Col
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            span={12}
          >
            <Dropdown menu={{ items }} placement='bottomRight'>
              <Avatar style={{ cursor: 'pointer' }} size='large' />
            </Dropdown>
          </Col>
        )}
      </Row>
    </Header>
  );
};

export default MhHeader;
