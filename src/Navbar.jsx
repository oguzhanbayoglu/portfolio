import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="font-mono navbar flex gap-1 lg:gap-4 fixed top-[3%] left-[50%] translate-x-[-50%] p-3 items-center justify-center rounded-full text-white z-40 text-[0.75rem] md:text-[1.1rem] lg:text-[1.5rem]">
      <NavLink
        activeClass="active"
        to="/portfolio/"
        className="flex gap-4 items-center justify-center"
        end
      >
        <img src="logo.png" alt="" className="h-6 opacity-50 hidden md:block" />
        Home
      </NavLink>
      <NavLink activeClass="active" to="about">
        About
      </NavLink>
      <NavLink activeClass="active" to="archive">
        Archive
      </NavLink>
      <NavLink activeClass="active" to="contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
