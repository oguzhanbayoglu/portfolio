import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full layout ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
