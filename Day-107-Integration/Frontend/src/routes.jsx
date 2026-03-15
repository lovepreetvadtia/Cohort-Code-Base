import  {createBrowserRouter} from 'react-router-dom'
import Home from './features/pages/Home'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
    // ,
    // {
    //     path:'/*',
    //     element:<NotFound/>
    // }
])