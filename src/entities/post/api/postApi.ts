import { baseApi } from "@/shared/api";
import { Post } from "../types/types";

export const postApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllPosts: build.query<Post[], {page:number}>({
            query: ({page}) => ({
                url: `/posts?_limit=10&_page=${page}`
            }),
            serializeQueryArgs : ({ endpointName }) => {
                return endpointName
            },
            
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
           
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
        }),
        getPostById: build.query<Post, { postId: number }>({
            query: ({ postId }) => ({
                url: `/posts/${postId}`
            })
        })
    })
})
export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi 