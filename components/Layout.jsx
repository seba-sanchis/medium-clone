import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#388d80]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
