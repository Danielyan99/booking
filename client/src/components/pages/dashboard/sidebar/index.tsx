import React, { useMemo, useState, memo, useCallback } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { getSidebarAdminMenuItems, getSidebarUserMenuItems } from '@src/components/pages/dashboard/sidebar/SideBarConstants';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { IRootState } from '@src/core/store';
import { useTranslation } from 'next-i18next';
import { UserRoles } from '@src/core/constants/user';

const { Header, Content, Sider } = Layout;
const getDynamicComponent = (query: string) => dynamic(() => import(`../${query ?? 'main'}`));

function Sidebar() {
  const { t } = useTranslation('common');
  const { user } = useSelector((state: IRootState) => state.user);
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const breadcrumbItems = useMemo(() => [{ title: t('dashboard') }, { title: t(router.query.tab as string) }], [router.query.tab]);
  const DynamicContentComponent = useMemo(() => getDynamicComponent(router.query.tab as string), [router.query.tab]);

  const getSidebarItems = useCallback(() => {
    if (user?.role === UserRoles.Admin) {
      return getSidebarAdminMenuItems();
    }
    return getSidebarUserMenuItems();
  }, [router.locale, user]);

  return (
    <Layout style={{ minHeight: 'calc(100vh - 58px)' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16 }} />
        <Menu theme='dark' selectedKeys={[router.query?.tab as string]} mode='inline' items={getSidebarItems()} />
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

export default memo(Sidebar);
