import { useContext } from "react";
import { PostContext } from "../context/post.context";
import { getFeed } from "../services/post.api";

export const usePost = ()=>{

    const context = useContext(PostContext)
    const {post,SetPost,loading,SetLoading,feed,SetFeed} = context
 
    async function HandleFeed() {
        SetLoading(true)
        const data = await getFeed()
        SetFeed(data.posts)
        SetLoading(false)
    }

    return {loading,feed,post,HandleFeed}

}

