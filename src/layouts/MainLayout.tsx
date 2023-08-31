import { RouterProvider } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { router } from '../router'

export function MainLayout() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}
