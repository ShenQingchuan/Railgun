import { RouterProvider } from 'react-router-dom'
import { router } from '../router'

export function MainLayout() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}
