import React, { memo } from 'react';
import Header from '@src/components/shared/header';

interface props {
  children: React.ReactNode
}

function Layout({ children }: props) {
  return (
    <div className="content">
      <Header />
      {children}
    </div>
  );
}

export default memo(Layout);
