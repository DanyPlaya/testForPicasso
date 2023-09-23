import { PostItem } from "@/entities/post";
import { useGetAllPostsQuery } from "@/entities/post/api/postApi";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Virtuoso } from "react-virtuoso";

export const UserPostsList = () => {
  const [page, setPage] = useState(1);
  const { data: post ,isLoading,isError} = useGetAllPostsQuery({page:page});
  const onLoadMorePosts = () =>{
    if(!isLoading){
      setPage((prev)=> prev+1)
    }
  }
  if(isError){
    return <div> error</div>
  }
  return (
    <Box width={500} height={800}>
      <Virtuoso 
        
        data={post}
        overscan={100}
        endReached={onLoadMorePosts}
        itemContent={(_,post)=> <PostItem body={post.body} id={post.id} title={post.title} key={post.id}/>}
      />
    </Box>
  );
};


