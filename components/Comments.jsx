import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

function Comments({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <div className="mt-[40px] mb-[40px] bg-[rgb(250,250,250)]">
      {comments.length > 0 && (
        <div className="mx-[24px]">
          <h3 className="pt-[24px] pb-[32px] text-[20px] leading-[24px] font-medium text-[rgba(41,41,41,1)]">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className="pb-[32px]">
              <hr aria-hidden="true"></hr>
              <div className="pt-[24px] pb-[8px] text-[14px] leading-[20px]">
                <span className="text-[rgba(41,41,41,1)]">{comment.name}</span>
                <span className="mx-[4px] text-[rgba(117,117,117,1)]">·</span>
                <span className="text-[rgba(117,117,117,1)]">
                  {moment(comment.createdAt).format("MMM DD, YYYY")}
                </span>
              </div>
              <p className="text-[16px] leading-[24px] italic text-[rgba(41,41,41,1)]">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comments;
