import { createContext, useState } from "react";

export const FollowContext = createContext()

export const FollowContxtProvider = ({children})=>{

    const [followers, setFollowers] = useState([])
    const [loading, setLoading] = useState(false)

return (<FollowContext.Provider value={{followers,setFollowers,loading,setLoading}} >
    {children}
 </FollowContext.Provider>)
}