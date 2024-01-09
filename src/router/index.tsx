import {ComponentType, Suspense, lazy} from 'react'
import {Navigate, createBrowserRouter} from 'react-router-dom'
import NormalLayout from '@/layouts/NormalLayout/NormalLayout'

const lazyLoad = (importFunction: () => Promise<{default: ComponentType<any>}>) => {
  const Component = lazy(importFunction)
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/log-in',
    element: lazyLoad(() => import('../views/LogIn/LogIn'))
  },
  {
    path: '/',
    element: <NormalLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },
      {
        path: '/home',
        element: lazyLoad(() => import('../views/Home/Home'))
      }
    ]
  }
])

export default router
