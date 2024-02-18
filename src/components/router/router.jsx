import React from 'react';
import { AppRoutes } from '../../routes/app.routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IndexLayout } from '../../layouts/index-layout';


const generateRoutes  = () => AppRoutes.map((route) => <Route key={route.path} path={route.path} element={<route.component />} />)

export const AppRouter = () => (
  <Routes>
    <Route element={<IndexLayout />}>
      {generateRoutes()}
      <Route path="*" element={<Navigate to={`/example2/`} />} />
    </Route>
  </Routes>
)
