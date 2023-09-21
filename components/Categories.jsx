import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="flex items-center h-[55px] max-w-[680px] mt-[24px] mx-[24px] shadow-[0_-1px_0_inset_rgba(230,230,230,1)]">
      <span className="mr-[24px] text-[rgba(117,117,117,1)]">
        <svg width="19" height="19" className="px-[2px]">
          <path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z" fillRule="evenodd"></path>
        </svg>
      </span>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <div className="mr-[32px] text-[14px] leading-[20px] text-[rgba(117,117,117,1)] cursor-pointer">
            <span
              className={
                window.location.pathname === `/category/${category.slug}`
                  ? "pb-[16px] border-b border-solid border-[rgba(41,41,41,1)] text-[rgb(8,8,8)]"
                  : ""
              }
            >
              {category.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
