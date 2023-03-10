import * as React from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div>
      <header>123</header>
      <Outlet />
    </div>
  );
};
