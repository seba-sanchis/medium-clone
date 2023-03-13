import React from "react";
import { useRouter } from "next/router";

import { getPosts, getPostDetails } from "../../services";

import {
  PostDetail,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
  Topics,
} from "../../components";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1336px] mx-auto">
      <div className="flex justify-evenly">
        <div className="w-[728px]">
          <PostDetail post={post} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="w-[368px] min-h-screen pr-[24px] pl-[40px] border-[1px] border-solid border-[rgba(242,242,242,1)]">
          <Author author={post.author} />

          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          
          <Topics />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
