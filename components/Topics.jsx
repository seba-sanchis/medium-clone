import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Topics = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="mt-[40px]">
      <h3 className="pb-[16px] text-[16px] leading-[20px] font-medium text-[rgba(41,41,41,1)]]">
        Recommended topics
      </h3>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div className="py-[8px] px-[16px] mr-[8px] mb-[10px] transition ease duration-300 rounded-full bg-[rgba(242,242,242,1)] hover:bg-[rgb(230,230,230)]">
              <span className="text-[14px] leading-[20px] text-[rgba(41,41,41,1)]">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;
