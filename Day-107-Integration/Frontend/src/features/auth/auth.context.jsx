import { createContext,useState } from "react";

export const AuthContext = createContext()

export const AuthProvider= ({childern})=>{

const {user,Setuser} = useState(null)
const {loading,Setloading} = useState(false)

return(
    <AuthContext.Provider value={{user,Setuser,loading,Setloading}}>
        {childern}
    </AuthContext.Provider>
)}