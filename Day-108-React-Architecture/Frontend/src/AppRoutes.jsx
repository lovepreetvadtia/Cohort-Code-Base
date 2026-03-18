import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login.jsx";
import Register from "./features/auth/pages/Register.jsx";

export const routes = createBrowserRouter([
    {
        element:<Login/>,
        path:"/login"
    },
    {
        element:<Register/>,
        path:"/register"
    },
    {
        element: <h1>Welcome</h1>,
        path:'/'
    }
])