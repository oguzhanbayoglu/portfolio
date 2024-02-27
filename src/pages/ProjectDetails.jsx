import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const ProjectDetails = (projects) => {
  const [details, setDetails] = useState([]);
  const { project } = useParams();
  const prjs = Object.entries(projects.projects);

  useEffect(() => {
    for (let i = 0; i < prjs.length; i++) {
      if (prjs[i][1].to === project) {
        setDetails(prjs[i]);
      }
    }
  }, []);

  console.log(typeof details[1]);

  return (
    <>
      <div className="gradBG absolute top-0  h-[60%] w-full lg:h-full "></div>

      <div className="flex flex-col items-center justify-center gap-8 z-20">
        <div className="flex flex-col xl:flex-row items-center justify-center mt-36 md:mt-[14rem] gap-4 md:gap-8 lg:gap-12 lg:w-[80dvw] 2xl:w-[100dvw]">
          <h2 className="text-white text-[5rem] text-center lg:text-[8rem] lg:max-w-[60dvw] 2xl:max-w-[80dvw] leading-[90%] font-extralight mt-4 text-wrap">
            {details[1] && details[1].name}
          </h2>
          <a
            href={details[1] && details[1].link}
            target="blank"
            className="group text-white flex aspect-square items-center justify-center relative"
          >
            <span className="material-symbols-outlined transition-all duration-300 text-[2rem] md:text-[3.5rem] lg:text-[5rem] group-hover:rotate-45  p-4 pt-5 border-neutral-50 border-2 md:border-4 rounded-full">
              arrow_outward
            </span>
            <span className="hidden group-hover:block absolute bottom-[-3rem] text-white text-[1rem] text-wrap m-4">
              Visit Project
            </span>
          </a>
        </div>
        <p className="font-mono text-white/70 text-center md:text-[1.5rem] max-w-[80rem] mx-8 md:m-8">
          {details[1] && details[1].desc}
        </p>
        <a
          href={details[1] && details[1].repo}
          className="text-white flex items-center justify-center gap-4 text-[1.5rem] group h-16 "
          target="blank"
        >
          <span className="material-symbols-outlined group-hover:text-[2.5rem] transition-all duration-300 text-[1.5rem]">
            terminal
          </span>
          <span className="group-hover:underline font-mono ">
            Visit Github Repo
          </span>
        </a>
        {details[1] &&
          details[1].img.map((im, i) => (
            <div>
              <div className="relative h-full w-full rounded-[1.5rem] md:rounded-[2.5rem] pt-14 p-2 bg-black/30">
                <div className="absolute top-5 left-6 bg-red-500 h-4 w-4 rounded-full"></div>
                <div className="absolute top-5 left-12 bg-yellow-500 h-4 w-4 rounded-full"></div>
                <div className="absolute top-5 left-[4.5rem] bg-green-500 h-4 w-4 rounded-full"></div>
                <img
                  src={im.src}
                  alt="project detail img"
                  className="rounded-[1rem] md:rounded-[2rem] max-w-[110rem] w-[30rem] md:w-[50rem] lg:w-[80rem] 2xl:w-[110rem]"
                />
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
