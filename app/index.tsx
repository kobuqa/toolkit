import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../layouts/app-layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppLayout />}
          children={[<Route path="/" element={<div>Yo </div>} />]}
        />
      </Routes>
    </BrowserRouter>
  );
};
