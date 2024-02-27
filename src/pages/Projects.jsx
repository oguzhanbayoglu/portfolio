import React from "react";
import projects from "../projects.json";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-container w-full gap-8 columns-1 md:columns-2 xl:columns-3">
      {projects.projects.map((prj, i) => (
        <div
          className=" bg-white/30 h-[40dvh] lg:h-[50dvh] max-h-[30rem] w-full rounded-[2rem] lg:rounded-[4rem] p-8 overflow-hidden mb-8 relative group"
          key={i}
        >
          <NavLink activeClass="active" to={prj.to} className="w-full h-full">
            <h1 className="text-white text-[3rem] text-right">{prj.name}</h1>
            <div className="absolute transition-all duration-300 group-hover:top-[calc(20%)] top-24 md:top-40 lg:top-[12rem] 2xl:top-[8rem] 2xl:left-[6rem] left-16 md:left-32 h-full w-full rounded-3xl backdrop-blur-[50rem] backdrop-saturate-[2] bg-black/70 saturate-150">
              <div className="absolute top-5 left-6 bg-red-500 h-4 w-4 rounded-full"></div>
              <div className="absolute top-5 left-12 bg-yellow-500 h-4 w-4 rounded-full"></div>
              <div className="absolute top-5 left-[4.5rem] bg-green-500 h-4 w-4 rounded-full"></div>
              <div className="absolute top-[3.5rem] left-[1rem] w-full z-10 flex flex-row ">
                <img src={prj.img[0].src} alt="" className="rounded-3xl" />
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Projects;

// {prj.img.map((imj, i) => (
//   <img src={imj.src} alt="project preview" className="h-40" />
// ))}
