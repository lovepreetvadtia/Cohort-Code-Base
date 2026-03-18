import { useContext } from "react";
import { AuthContext } from "../auth.context";

import { login,register,get } from "../services/auth.api";

export const useAuth = ()=>{
   
    const context = useContext(AuthContext)    
    const {user, SetUser,laoding,SetLoading} = context

   async function HandleLogin(identifier,password){
        SetLoading(true)
        const response = await login(identifier,password)
        SetUser(response.user)
        SetLoading(false)
    }
    async function HandleRegister(username,email,password){
        SetLoading(true)
        const response = await register(username,email,password)
        SetUser(response.user)
        SetLoading(false)
    }


    return{
        user,loading,HandleLogin,HandleRegister
    }
}



