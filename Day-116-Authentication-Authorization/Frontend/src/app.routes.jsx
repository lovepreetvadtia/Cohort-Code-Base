import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

export const routes = createBrowserRouter([
    {element:<Home/>,
    path:'/'}
    ,

    {element:<Login/>,
    path:"/login"
    },
    
    {element:<Register/>,
    path:"/register"
    }
])