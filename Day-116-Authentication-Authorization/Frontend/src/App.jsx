import FaceExpression from './components/FaceExpression'
import {RouterProvider } from 'react-router'
import Home from './pages/Home'
import { routes } from './app.routes'
import './shared/styles/global.scss'
import { AuthProvider } from './features/auth/context/auth.context'

function App() {

  return (
    <AuthProvider>
    <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App
