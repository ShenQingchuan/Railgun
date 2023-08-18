import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer'
import { router } from './router'

import './i18n'
import './styles/tailwind.css'
import './styles/global.css'

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
