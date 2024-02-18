import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { PageLoader } from '../components/page-loader/page-loader'

export const IndexLayout = () => (
  <Suspense fallback={<PageLoader />}>
    <Outlet />
  </Suspense>
)
