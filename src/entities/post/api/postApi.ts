import { baseApi } from "@/shared/api";
import { Post } from "../types/types";

export const postApi = baseApi.injectEndpoints({
    endpoints:(build) => ({
        getAllPosts: build.query<Post,void>({
            query: ()=>({
                url: '/posts'
            })
        })
    })
})
export const  {useGetAllPostsQuery} = postApi 