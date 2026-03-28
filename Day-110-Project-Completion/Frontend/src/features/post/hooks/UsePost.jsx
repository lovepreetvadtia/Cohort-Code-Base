import { useContext } from "react";
import { PostContext } from "../context/post.context";
import { getFeed,CreatePost,Like, UnLike } from "../services/post.api";

export const usePost = ()=>{

    const context = useContext(PostContext)
    const {post,SetPost,loading,SetLoading,feed,SetFeed,} = context
 
    async function HandleFeed() {
        SetLoading(true)
        const data = await getFeed()
        SetFeed(data.posts)
        SetLoading(false)
    }

    async function HandleCreatePost(file,caption){
        SetLoading(true)
        const data = await CreatePost(file,caption)
        SetFeed([data.post,...feed])
        SetLoading(false)
    }

    async function HandleLike(post) {
        const data = await Like(post)
        await HandleFeed()
    }
    
    async function HandleUnLike(post){
        const data = await UnLike(post)
        await HandleFeed()
    }

    return {loading,feed,post,HandleFeed,HandleCreatePost,HandleLike,HandleUnLike}

}

