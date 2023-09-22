import { baseApi } from "@/shared/api";
import { Post } from "../types/types";

export const postApi = baseApi.injectEndpoints({
    endpoints:(build) => ({
        getAllPosts: build.query<Post[],void>({
            query: ()=>({
                url: '/posts'
            })
        }),
        getPostById: build.query<Post,{postId:number}>({
            query: ({postId}) =>({
                url:`/posts?id=${postId}`
            })
        })
    })
})
export const  {useGetAllPostsQuery,useLazyGetPostByIdQuery} = postApi 