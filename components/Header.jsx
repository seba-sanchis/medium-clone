import React, { useState, useEffect } from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center h-[57px] px-[24px] border-[1px] border-solid bg-[rgba(255,255,255,1)] border-[rgba(242,242,242,1)]">
      <div className="flex items-center">
        <Link href="/">
          <svg viewBox="0 0 1043.63 592.71" className="h-[25px]">
            <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
          </svg>
        </Link>
        <div className="flex items-center w-[240px] ml-[16px] rounded-[20px] bg-[rgba(250,250,250,1)]">
          <div className="mx-[12px]">
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[rgba(117,117,117,1)]">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
              ></path>
            </svg>
          </div>
          <input
            placeholder="Search Blog"
            className="py-[10px] pr-[20px] text-[14px] leading-[20px] bg-transparent text-[rgba(41,41,41,1)] placeholder-[rgba(117,117,117,1)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
