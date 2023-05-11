import React from 'react';
import Sidebar from '@src/components/pages/dashboard/sidebar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Dashboard() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Dashboard;
