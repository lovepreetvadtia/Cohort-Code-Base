import { createContext, useState } from "react";
// import { LoginHandle,RegisterHandle } from "./services/auth.api";

export const AuthContext = createContext()

export const AuthProvider =({children})=>{

const [user, SetUser] = useState(null)
const [loading,SetLoading] =useState(false)
    
return(
    <AuthContext.Provider value={{user,SetUser,loading,SetLoading}}>
        {children}
    </AuthContext.Provider>
)
}