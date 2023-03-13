import React from "react";
import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText;

    if (text) {
      modifiedText = text;
    } else {
      modifiedText = obj?.children?.[0].children?.[0].text;
    }

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.code) {
        modifiedText = (
          <code
            key={index}
            className="py-[2px] px-[4px] text-[75%] bg-[rgba(242,242,242,1)]"
          >
            {text}
          </code>
        );
      }
    }

    switch (type) {
      case "paragraph":
        return (
          <div
            key={index}
            className="mt-[32px] text-[20px] leading-[32px] text-[rgba(41,41,41,1)]"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </div>
        );
      case "bulleted-list":
        return (
          <ul
            key={index}
            className="mt-[32px]"
          >
            {modifiedText.map((item, i) => (
              <li key={i} className="mt-[15px] mb-[-7px] ml-[30px] text-[20px] leading-[28px] list-disc text-[rgba(41,41,41,1)]">{item}</li>
            ))}
          </ul>
        );
      case "numbered-list":
        return (
          <ul
            key={index}
            className="mt-[32px]"
          >
            {modifiedText.map((item, i) => (
              <li key={i} className="mt-[15px] mb-[-7px] ml-[30px] text-[20px] leading-[28px] list-decimal text-[rgba(41,41,41,1)]">{item}</li>
            ))}
          </ul>
        );
      case "code-block":
        return (
          <div
            key={index}
            className="flex flex-col p-[32px] mt-[32px] rounded-[4px] border solid border-[rgb(229,229,229)] bg-[rgb(249,249,249)]"
          >
            {modifiedText.map((item, i) => (
              <div
                key={i}
                dangerouslySetInnerHTML={{
                  __html: item.split("\n").join("<br/>"),
                }}
              ></div>
            ))}
          </div>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="mt-[32px]"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="w-[680px] mx-[24px]">
      <div className="flex mt-[56px] mb-[32px]">
        <div className="w-[48px] h-[48px] mr-[16px] rounded-full overflow-hidden">
          <img
            alt={post.author.name}
            height="48px"
            width="48px"
            src={post.author.photo.url}
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-[4px] text-[16px] leading-[24px] text-[rgba(41,41,41,1)]">
            {post.author.name}
          </p>
          <span className="text-[14px] leading-[20px] text-[rgba(117,117,117,1)]">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <h1 className="text-[32px] leading-[40px] font-bold text-[rgba(41,41,41,1)]">
        {post.title}
      </h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          getContentFragment(itemIndex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
};

export default PostDetail;
