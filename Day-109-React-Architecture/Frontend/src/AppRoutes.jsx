import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login.jsx";
import Register from "./features/auth/pages/Register.jsx";
import Feed from "./features/post/Feed.jsx";

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
        element: <Feed/>,
        path:'/'
    }
])