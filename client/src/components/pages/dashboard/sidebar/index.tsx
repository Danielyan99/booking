import React, { useMemo, useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import sidebarMenuItems from '@src/components/pages/dashboard/sidebar/SideBarConstants';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const { Header, Content, Sider } = Layout;
const getDynamicComponent = (query: string) => dynamic(() => import(`../${query ?? 'main'}`));

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const breadcrumbItems = useMemo(() => [{ title: 'dashboard' }, { title: router.query.tab }], [router.query.tab]);
  const DynamicContentComponent = useMemo(() => getDynamicComponent(router.query.tab as string), [router.query.tab]);

  return (
    <Layout style={{ minHeight: 'calc(100vh - 58px)' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16 }} />
        <Menu theme='dark' selectedKeys={[router.query?.tab as string]} mode='inline' items={sidebarMenuItems} />
      </Sider>
      <Layout className='site-layout'>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb items={breadcrumbItems} style={{ margin: '16px 0' }} />
          <DynamicContentComponent />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Sidebar;
