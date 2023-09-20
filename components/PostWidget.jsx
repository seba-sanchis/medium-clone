import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="mt-[40px]">
      <h3 className="mb-[22px] text-[16px] leading-[20px] font-medium text-[rgba(41,41,41,1)]">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="pb-[20px]">
          <Link href={`/post/${post.slug}`} key={post.title}>
            <div className="flex justify-between">
              <div className="mr-[24px]">
                <div className="flex items-center mb-[8px]">
                  <img
                    alt={post.author.name}
                    height="20px"
                    width="20px"
                    src={post.author.photo.url}
                    className="rounded-full"
                  />
                  <p className="ml-[8px] text-[13px] leading-[16px] font-medium text-[rgba(41,41,41,1)]">
                    {post.author.name}
                  </p>
                </div>
                <h2 className="text-[16px] leading-[20px] font-bold line-clamp-3 text-[rgba(41,41,41,1)]">
                  {post.title}
                </h2>
              </div>
              {post.featuredImage?.url && (
                <div className="flex justify-center min-w-[56px] w-[56px] h-[56px] overflow-hidden">
                  <img
                    alt={post.title}
                    src={post.featuredImage.url}
                    className="max-w-none h-[56px]"
                  />
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
