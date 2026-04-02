import { useContext } from "react";
import { FollowContext } from "../Follow.Context.jsx";
import {fetchFollow} from '../services/follow.service.js'

export function useFollow(){
    const context = useContext(FollowContext)

     if(!context){
        throw new Error("useFollow must be used inside provider")
    }

    const {followers,setFollowers,loading,setLoading} = context

    async function getFollowers() {
        setLoading(true)
        const response = await fetchFollow()
        setFollowers(response)
        setLoading(false)
    }

    return{
        followers,loading,getFollowers
    }
}
