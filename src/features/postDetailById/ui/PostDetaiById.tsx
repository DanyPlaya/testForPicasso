import { PostDetail, PostDetailSkeleton } from "@/entities/post";
import { useGetPostByIdQuery } from "@/entities/post/api/postApi";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const PostDetailById = () => {
  const { id } = useParams<{ id: string }>();
  const postIdParams = Number(id); // :1
  console.log(id);
  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostByIdQuery({ postId: postIdParams! });
  if (isLoading) {
    return <PostDetailSkeleton />;
  }
  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Произошла ошибка</AlertTitle>
      </Alert>
    );
  }
  return <PostDetail body={post?.body} id={post?.id} title={post?.title} />;
};
