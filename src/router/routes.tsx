import { lazy } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

const MainPage = lazy(() => import('../pages/Main'))

const routes: RouteObject[] = [
  {
    path: '/',
    children: [{ path: '', element: <MainPage /> }],
  },
]

export const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
  })),
)
