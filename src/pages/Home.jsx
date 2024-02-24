import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-8 w-full">
        <h1 className="text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem] flex flex-col text-white/70 font-[600] mt-40 md:mt-48 mb-8 md:mb-24 items-center">
          Hi. I'm Oğuz.{" "}
          <span className="mt-[-2rem] lg:mt-[-5rem]">A Designer.</span>
          <p className="text-[1rem] md:text-[1.5rem] font-[100] w-[70%] text-center mt-[1rem] font-mono">
            I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </p>
        </h1>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 md:gap-16 lg:gap-20  items-center justify-center xl:max-w-[140rem] w-full px-4 md:px-16">
          <a
            href="#projects"
            className="p-8 scroll-smooth relative overflow-hidden bg-white/30 flex-1 h-[20rem] md:h-[30rem] lg:h-[35rem] 2xl:h-[40rem] xl:col-span-2 rounded-[2rem] lg:rounded-[4rem] 2xl:rounded-[6rem]"
          >
            <h2 className="text-[2rem] md:text-[4rem] lg:mr-6 lg:text-[6rem] text-white/80 font-medium text-right">
              Projects
            </h2>
            <div className="absolute top-24 md:top-40 lg:top-[12rem] left-16 md:left-32 h-full w-full rounded-3xl backdrop-blur-[50rem] saturate-[3]">
              <div className="absolute top-5 left-6 bg-red-500 h-4 w-4 rounded-full"></div>
              <div className="absolute top-5 left-12 bg-yellow-500 h-4 w-4 rounded-full"></div>
              <div className="absolute top-5 left-[4.5rem] bg-green-500 h-4 w-4 rounded-full"></div>
            </div>
            <div className="absolute h-full top-[9.20rem] md:top-[14.20rem] lg:top-[18.20rem] left-[5rem] md:left-[10rem] lg:left-[11rem] lg:gap-10 gap-4 md:gap-8 w-full z-10 flex flex-row items-center justify-center">
              <div className=" bg-[rgba(23,37,158,0.24)] z-20 h-full w-[50%] rounded-3xl"></div>
              <div className=" bg-[rgba(23,37,158,0.24)] z-20 h-full w-[50%] rounded-3xl"></div>
            </div>
          </a>
          <NavLink
            to="/about"
            className="overflow-hidden p-8 bg-[rgba(119,104,255,0.73)] flex-1 h-[20rem] md:h-[30rem] lg:h-[35rem] 2xl:h-[40rem]  rounded-[2rem] lg:rounded-[4rem] 2xl:rounded-[6rem] relative"
          >
            <h2 className="text-[2rem] lg:text-[3rem] 2xl:text-[3.7rem] text-white/80 font-medium text-right">
              About me
            </h2>
            <div className="absolute top-48 2xl:top-[20rem] md:top-72 left-16 md:left-0 h-full w-full rounded-3xl backdrop-blur-[50rem]"></div>
            <div className="flex">
              <div className="absolute overflow-hidden top-[6.25rem] 2xl:top-[8.25rem] left-24 md:left-24 bg-[rgba(104,255,104,0.73)] h-full w-[50%] max-w-[26rem] rounded-3xl flex flex-col items-center justify-center gap-2 pt-8">
                <div className=" bg-[rgb(46,53,114)] h-[50%] aspect-square rounded-full"></div>
                <div className=" bg-[rgb(46,53,114)] w-[60%] lg:w-[24rem] h-full rounded-t-full"></div>
              </div>
              <div className="absolute top-[6.25rem] 2xl:top-[8.25rem] left-[23rem] md:left-[35rem] lg:left-[35rem] xl:left-[24rem] 2xl:left-[29rem] bg-[rgba(212,104,255,0.95)] h-36 w-full rounded-3xl"></div>
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            className=" overflow-hidden p-8 bg-white/30 flex-1 h-[20rem] md:h-[30rem] lg:h-[35rem] 2xl:h-[40rem]  rounded-[2rem] lg:rounded-[4rem] 2xl:rounded-[6rem] relative"
          >
            <h2 className="text-[2rem] lg:text-[2.7rem] text-white/80 font-medium text-right">
              Let's Work Together
            </h2>
            <p className="text-[1rem] font-mono text-white/80 font-medium text-right">
              Contact me
            </p>
            <div className="absolute top-32 left-16 lg:top-40 h-full w-full rounded-3xl backdrop-blur-[50rem] saturate-[3]">
              <div className="absolute top-5 left-6 bg-red-500 h-4 w-4 rounded-full"></div>
              <div className="absolute top-5 left-12 bg-yellow-500 h-4 w-4 rounded-full"></div>
              <div className="absolute top-5 left-[4.5rem] bg-green-500 h-4 w-4 rounded-full"></div>
            </div>
            <div className="absolute top-[13rem] lg:top-[15rem] left-[8rem] h-full w-full z-10 flex gap-4">
              <span class="material-symbols-outlined text-white/80 text-[6rem]">
                contact_mail
              </span>
              <span class="material-symbols-outlined text-white/50 text-[14rem] md:text-[24rem]">
                markunread_mailbox
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/archive"
            className="xl:col-span-2 overflow-hidden p-8 bg-white/30 flex-1 h-[20rem] md:h-[30rem] lg:h-[35rem] 2xl:h-[40rem]  rounded-[2rem] lg:rounded-[4rem] 2xl:rounded-[6rem] relative"
          >
            <div className="absolute top-0 left-0 h-full w-full rounded-3xl  columns-4 p-4 gap-2 lg:gap-4 scale-110 ">
              <div className=" bg-[rgb(48,54,107)] h-[55%] w-full rounded-3xl mb-2 lg:mb-4"></div>
              <div className=" bg-[rgb(48,54,107)] h-[50%] w-full rounded-3xl mb-2 lg:mb-4"></div>
              <div className=" bg-[rgba(104,255,104,0.8)] h-[60%] w-full rounded-3xl mb-2 lg:mb-4 -z-[50]"></div>
              <div className=" bg-[rgb(48,54,107)] h-[60%] w-full rounded-3xl mb-2 lg:mb-4"></div>
              <div className=" bg-[rgba(212,104,255,0.73)] h-[62%] w-full rounded-3xl mb-2 lg:mb-4"></div>
              <div className=" bg-[rgb(48,54,107)] h-[50%] w-full rounded-3xl mb-2 lg:mb-4"></div>
              <div className=" bg-[rgb(48,54,107)] h-[40%] w-full rounded-3xl mb-2 lg:mb-4"></div>
              <div className=" bg-[rgb(48,54,107)] h-[50%] w-full rounded-3xl mb-2 lg:mb-4"></div>
            </div>
            <div className="absolute text-right right-8">
              <h2 className="text-[2rem] lg:text-[3.6rem] text-white font-medium text-right top-4 z-20">
                Hobby Archive
              </h2>
              <p className="text-[1rem] font-mono text-white/90 font-medium text-right z-20">
                Check out some cool things
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      <div id="projects">
        <h2 className="text-[3.5rem] md:text-[5.5rem] lg:text-[8rem] xl:text-[10rem] flex flex-col text-white/70 font-[600] mt-24 md:mt-32 mb-8 md:mb-24 items-center">
          Projects
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          <div className="bg-red-500 h-40 w-40 rounded-3xl"></div>
          <div className="bg-red-500 h-40 w-40 rounded-3xl"></div>
          <div className="bg-red-500 h-40 w-40 rounded-3xl"></div>
          <div className="bg-red-500 h-40 w-40 rounded-3xl"></div>
          <div className="bg-red-500 h-40 w-40 rounded-3xl"></div>
          <div className="bg-red-500 h-40 w-40 rounded-3xl"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
