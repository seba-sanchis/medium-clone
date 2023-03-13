import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="mt-[40px]">
      <div>
        <Image
          alt={author.name}
          unoptimized
          height="88"
          width="88"
          className="rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="mt-[16px] text-[16px] leading-[20px] font-medium text-[rgba(41,41,41,1)]">{author.name}</h3>
      <p className="mt-[12px] text-[14px] leading-[20px] text-[rgba(117,117,117,1)]">{author.bio}</p>
    </div>
  );
};

export default Author;
