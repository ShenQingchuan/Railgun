import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { ErrorPage } from './pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
])
