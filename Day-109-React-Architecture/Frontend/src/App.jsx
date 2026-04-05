import React from 'react'
import { routes } from './AppRoutes'
import { RouterProvider } from 'react-router-dom'
import './style.scss'
import { AuthProvider } from './features/auth/auth.context'
import { PostContextProvider } from './features/post/context/post.context'
const App = () => {
  return (
    <>
    <AuthProvider>
    <PostContextProvider>
    <RouterProvider router={routes}/>
    </PostContextProvider>
    </AuthProvider>
    </>
  )
}

export default App
