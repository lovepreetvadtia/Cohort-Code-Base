import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import './features/auth/pages/styles/auth.scss'

function App() {

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
