import React from 'react'
import { routes } from './AppRoutes'
import { RouterProvider } from 'react-router-dom'
import './style.scss'
import { AuthProvider } from './features/auth/auth.context'
import { PostContextProvider } from './features/post/context/post.context'
import { FollowContxtProvider } from './features/follows/Follow.Context'
const App = () => {
  return (
    <>
    <AuthProvider>
    <PostContextProvider>
      <FollowContxtProvider>
    <RouterProvider router={routes}/>
      </FollowContxtProvider>
    </PostContextProvider>
    </AuthProvider>
    </>
  )
}

export default App
