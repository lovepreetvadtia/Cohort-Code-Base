import React from 'react'
import { routes } from './AppRoutes'
import { RouterProvider } from 'react-router-dom'
import './features/auth/styles/auth.style.scss'
import './style.scss'
import { AuthProvider } from './features/auth/auth.context'

const App = () => {
  return (
    <>
    <AuthProvider>
    <RouterProvider router={routes}>
        <h1>Welcome</h1>
    </RouterProvider>
    </AuthProvider>
    </>
  )
}

export default App
