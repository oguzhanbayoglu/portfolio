import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-40 md:mt-60 mb-8 text-[5rem] md:text-[7rem] lg:text-[9rem] text-white/70 font-bold">
          I'm Oğuz
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:mr-32 flex flex-col">
            <img
              loading="lazy"
              src="avatar.jpg"
              alt="temporary"
              className="w-[28.2rem] md:w-[30rem] rounded-t-[7rem] lg:rounded-t-full object-cover flex-[1]"
            />
            <div className="bg-white/50 h-24 rounded-b-3xl  "></div>
          </div>
          <div className="p-10 lg:p-0 md:w-[60rem] flex flex-col gap-6 md:gap-12">
            <h2 className="text-[2rem] md:text-[4rem] lg:text-[4.7rem] mt-4 md:mt-10 text-white">
              A Designer working remotely from İzmir, Türkiye.
            </h2>
            <p className="text-white/70 text-[1.2rem]  flex flex-col gap-4 md:gap-8 font-mono">
              I stuied architecture. Throughout my education, driven by my
              interest in technology and design, I endeavored to improve myself
              graphic design and web development. I have participated in
              numerous freelance projects in these areas both individually and
              as part of different teams.
              <span className="font-mono">
                To keep my creativity fresh, I play guitar and bass. I also
                engage in drawing using both digital and traditional methods
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
