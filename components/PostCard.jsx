import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post, index }) => {
  return (
    <div
      className={
        index === 0 ? "w-[680px] mx-[24px]" : "w-[680px] mx-[24px] pt-[24px]"
      }
    >
      <div className="flex items-center">
        <img
          alt={post.author.name}
          height="24px"
          width="24px"
          src={post.author.photo.url}
          className="rounded-full"
        />
        <p className="ml-[8px] text-[14px] leading-[20px] text-[rgba(41,41,41,1)]">
          {post.author.name}
        </p>
        <div className="text-[14px] leading-[20px] text-[rgba(117,117,117,1)]">
          <span className="mx-[4px]">·</span>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <Link href={`/post/${post.slug}`}>
        <div className="flex mt-[12px] mb-[32px] cursor-pointer">
          <div className="w-[508px]">
            <h1 className="max-h-[84px] pb-[8px] text-[22px] leading-[28px] font-bold text-[rgba(41,41,41,1)]">
              {post.title}
            </h1>
            <p className="max-h-[72px] text-[16px] leading-[24px] text-ellipsis overflow-hidden line-clamp-3 text-[rgba(41,41,41,1)]">
              {post.excerpt}
            </p>
          </div>
          <div className="flex justify-center min-w-[112px] w-[112px] h-[112px] overflow-hidden ml-[60px]">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="max-w-none h-[112px]"
            />
          </div>
        </div>
      </Link>
      <hr aria-hidden="true" className="bg-[rgb(230,230,230)]"></hr>
    </div>
  );
};

export default PostCard;
