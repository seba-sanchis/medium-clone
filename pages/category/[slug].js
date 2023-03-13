import React from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader, PostWidget, Topics } from "../../components";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1336px] mx-auto">
      <div className="flex justify-evenly">
        <div className="w-[728px]">
          <Categories />
          <div className="pt-[50px]">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={post.node.title} index={index} />
            ))}
          </div>
        </div>
        <div className="w-[368px] min-h-screen pr-[24px] pl-[40px] border-[1px] border-solid border-[rgba(242,242,242,1)]">
          <PostWidget />
          <Topics />
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
