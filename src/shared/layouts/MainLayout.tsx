import { Layout } from 'antd';
import { CSSProperties, FC, ReactNode } from 'react';
import { MhHeader } from 'widgets/MhHeader';
import { Sidebar } from 'widgets/Sidebar';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from 'shared/consts/sizes.ts';

const { Content } = Layout;

interface MainLayoutProps {
  children: ReactNode;
}

const contentStyles: CSSProperties = {
  position: 'fixed',
  width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
  transform: `translate(${SIDEBAR_WIDTH}px, ${HEADER_HEIGHT}px)`,
  marginLeft: 14,
  marginTop: 14,
  height: '100vh',
  overflow: 'scroll',
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <MhHeader />
      <Layout>
        <Sidebar />
        <Content style={contentStyles}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
