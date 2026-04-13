import FaceExpression from './components/FaceExpression'
import {RouterProvider } from 'react-router'
import Home from './pages/Home'
import { routes } from './app.routes'

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
