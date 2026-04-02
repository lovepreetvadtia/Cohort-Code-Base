import { getFollows } from "./follow.api";

export async function fetchFollow() {
    try {
        const data  = await getFollows()
        return data.following || [] 
    } catch (error) {
        console.log('Service Error',error)
    }
}