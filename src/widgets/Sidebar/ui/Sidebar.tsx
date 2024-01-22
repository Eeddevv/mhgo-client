import Sider from 'antd/lib/layout/Sider';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from 'shared/consts/sizes.ts';
import { CSSProperties } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { ItemType, MenuItemType } from 'antd/lib/menu/hooks/useItems';
import {
  AppstoreOutlined,
  BankOutlined,
  CalendarOutlined,
  HomeOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  getRouteAboutBusiness,
  getRouteHome,
  getRouteMessenger,
  getRouteNews,
  getRouteProfile,
  getRouteRecords,
} from 'shared/consts/router.ts';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User/model/selectors/getUserData.ts';

const sidebarStyles: CSSProperties = {
  width: SIDEBAR_WIDTH,
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  position: 'fixed',
  left: 0,
  bottom: 0,
  background: '#fff',
  borderRight: '1px solid #DCE1E6',
};

const Sidebar = () => {
  const { pathname } = useLocation();
  const user = useSelector(getUserData);

  const SIDEBAR_ITEMS: ItemType<MenuItemType>[] = [
    {
      icon: <HomeOutlined />,
      label: <Link to={getRouteHome()}>Главная</Link>,
      key: getRouteHome(),
    },
    {
      icon: <UserOutlined />,
      label: (
        <Link
          to={user.userId ? getRouteProfile(user.userId) : getRouteProfile()}
        >
          Моя страница
        </Link>
      ),
      key: user.userId ? getRouteProfile(user.userId) : getRouteProfile(),
    },
    {
      icon: <AppstoreOutlined />,
      label: <Link to={getRouteNews()}>Новости</Link>,
      key: getRouteNews(),
    },
    {
      icon: <MessageOutlined />,
      label: <Link to={getRouteMessenger()}>Мессенджер</Link>,
      key: getRouteMessenger(),
    },
    {
      icon: <CalendarOutlined />,
      label: <Link to={getRouteRecords()}>Мои записи</Link>,
      key: getRouteRecords(),
    },
    {
      icon: <BankOutlined />,
      label: <Link to={getRouteAboutBusiness()}>Для бизнеса</Link>,
      key: getRouteAboutBusiness(),
    },
  ];

  return (
    <div>
      <Sider width={SIDEBAR_WIDTH} style={sidebarStyles}>
        <Menu selectedKeys={[pathname]} items={SIDEBAR_ITEMS} />
      </Sider>
    </div>
  );
};

export default Sidebar;
