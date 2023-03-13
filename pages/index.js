import Head from "next/head";
import { Categories, PostCard, PostWidget, Topics } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1336px] mx-auto">
        <div className="flex justify-evenly">
          <div className="w-[728px]">
            <Categories />
            <div className="pt-[50px]">
              {posts.map((post, index) => (
                <PostCard
                  post={post.node}
                  key={post.node.title}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="w-[368px] min-h-screen pr-[24px] pl-[40px] border-[1px] border-solid border-[rgba(242,242,242,1)]">
            <PostWidget />
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
