import React from 'react'
import { RouteObject } from 'react-router-dom'

export const commonRoutes: RouteObject[] = [
  {
    path: '/meet/:id',
    Component: React.lazy(() => import('@/pages/meet')),
  },
  {
    path: '/lab-smith',
    Component: React.lazy(() => import('@/pages/user/lab-smith')),
  },
]
