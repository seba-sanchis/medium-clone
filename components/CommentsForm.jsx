import React, { useRef, useState, useEffect } from "react";

import { submitComment } from "../services";

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="py-[24px] my-[40px] border-t border-solid border-[rgb(41,41,41)]">
      <h3 className="text-[20px] leading-[24px] font-medium text-[rgba(41,41,41,1)]">
        Leave a reply
      </h3>
      <div className="my-[32px]">
        <label
          htmlFor="comment"
          className="mb-[10px] text-[14px] leading-[20px] text-[rgba(117,117,117,1)]"
        >
          Comment
        </label>
        <div className="flex border-b border-solid border-[rgba(204,204,204,1)]">
          <textarea
            ref={commentEl}
            name="comment"
            className="flex-1 h-[72px] py-[4px] text-[14px] leading-[20px] outline-0 resize-none overflow-hidden text-[rgba(41,41,41,1)]"
          />
        </div>
      </div>
      <div className="flex my-[32px]">
        <div className="flex-1 mr-[10px]">
          <label
            htmlFor="name"
            className="mb-[10px] text-[14px] leading-[20px] text-[rgba(117,117,117,1)]"
          >
            Name
          </label>
          <div className="border-b border-solid border-[rgba(204,204,204,1)]">
            <input
              type="text"
              ref={nameEl}
              name="name"
              className="py-[4px] text-[14px] leading-[20px] outline-0 text-[rgba(41,41,41,1)]"
            />
          </div>
        </div>
        <div className="flex-1 ml-[10px]">
          <label
            htmlFor="email"
            className="mb-[10px] text-[14px] leading-[20px] text-[rgba(117,117,117,1)]"
          >
            Email
          </label>
          <div className="border-b border-solid border-[rgba(204,204,204,1)]">
            <input
              type="text"
              ref={emailEl}
              name="email"
              className="py-[4px] text-[14px] leading-[20px] outline-0 text-[rgba(41,41,41,1)]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            className="border-[rgba(117,117,117,1)]"
          />
          <label htmlFor="storeData" className="text-[14px] leading-[20px] pl-[8px] text-[rgba(117,117,117,1)]">
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p>All fields are required.</p>}
      <div className="mt-[24px]">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="pt-[7px] px-[16px] pb-[9px] border border-solid rounded-full text-[14px] leading-[20px] text-[rgba(255,255,255,1)] border-[rgb(26,137,23)] hover:border-[rgb(15, 115, 12)] bg-[rgb(26,137,23)] hover:bg-[rgb(15,115,12)]"
        >
          Post Comment
        </button>
        {showSuccessMessage && <span>Comment submitted for review</span>}
      </div>
    </div>
  );
}

export default CommentsForm;
