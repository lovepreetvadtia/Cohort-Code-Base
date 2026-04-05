import { createContext ,useState} from "react";

export const PostContext = createContext()

export const PostContextProvider = ({children})=>{
    const [post,SetPost] = useState(null)
    const [loading,SetLoading] = useState(false)
    const [feed,SetFeed] = useState(null)

    return(
        <PostContext.Provider value={{post,SetPost,loading,SetLoading,feed,SetFeed}}>
            {children}
        </PostContext.Provider>
    )
}