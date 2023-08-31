import React from 'react'
import ReactDOM from 'react-dom/client'

import './i18n'
import './styles/tailwind.css'
import './styles/global.css'
import { Providers } from './providers'
import { MainLayout } from './layouts/MainLayout'

function App() {
  return (
    <MainLayout />
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
