import React from "react";
import Footer from "./Footer";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="gradBG absolute top-0  h-[60%] lg:h-full w-full"></div>

      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="mt-40 md:mt-52 mb-8 text-[5rem] md:text-[7rem] lg:text-[10rem] text-white/70 font-bold">
          I'm Oğuz
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:mr-32 flex flex-col">
            <img
              loading="lazy"
              src="avatar.jpg"
              alt="temporary"
              className="w-[22rem] md:w-[30rem] rounded-t-[7rem] lg:rounded-t-full object-cover flex-[1]"
            />
            <a
              className="bg-white/10 h-24 rounded-b-3xl p-6 md:p-8 flex items-center gap-4"
              href="https://open.spotify.com/track/3OOfyPDqrDPMGzll0sHYB0?autoplay=true"
              target="blank"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.5013 0.0664062C9.48964 0.0664062 0.5625 8.99331 0.5625 20.005C0.5625 31.0171 9.48964 39.9433 20.5013 39.9433C31.5142 39.9433 40.4404 31.0171 40.4404 20.005C40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586L20.5013 0.0664062V0.0664062ZM29.6451 28.8236C29.56 28.963 29.4483 29.0842 29.3163 29.1804C29.1843 29.2766 29.0346 29.3458 28.8758 29.3841C28.717 29.4223 28.5522 29.4289 28.3909 29.4034C28.2296 29.3779 28.0748 29.3208 27.9356 29.2355C23.2542 26.3759 17.3608 25.7283 10.4204 27.314C10.099 27.3871 9.76174 27.3296 9.48275 27.1541C9.20375 26.9787 9.00584 26.6996 8.9325 26.3783C8.89597 26.2192 8.89119 26.0545 8.91842 25.8935C8.94565 25.7326 9.00436 25.5786 9.09118 25.4404C9.17801 25.3021 9.29126 25.1824 9.42443 25.088C9.5576 24.9936 9.70808 24.9264 9.86726 24.8902C17.4625 23.1543 23.9775 23.9021 29.2332 27.114C29.8189 27.4736 30.0046 28.2378 29.6451 28.8236V28.8236ZM32.0856 23.3938C31.6356 24.1259 30.6785 24.3569 29.9475 23.9069C24.588 20.6119 16.4182 19.6578 10.0789 21.5821C9.25679 21.8305 8.38845 21.3671 8.13893 20.5464C8.01986 20.1518 8.06213 19.7262 8.25647 19.3627C8.4508 18.9993 8.78134 18.7277 9.1756 18.6076C16.4168 16.4105 25.4189 17.4747 31.5737 21.2569C32.3046 21.7069 32.5356 22.664 32.0856 23.394V23.3938ZM32.2951 17.7405C25.8689 13.9236 15.2665 13.5726 9.13107 15.4347C8.14583 15.7335 7.10393 15.1774 6.80536 14.1921C6.66179 13.7188 6.71209 13.2078 6.94521 12.7715C7.17832 12.3353 7.57515 12.0094 8.04845 11.8657C15.0915 9.7276 26.7999 10.1407 34.1985 14.5328C34.4093 14.6576 34.5935 14.8227 34.7404 15.0187C34.8874 15.2147 34.9942 15.4378 35.0548 15.6752C35.1154 15.9126 35.1286 16.1596 35.0936 16.4021C35.0586 16.6446 34.9761 16.8778 34.8508 17.0883C34.327 17.9745 33.1794 18.2666 32.2961 17.7405H32.2951Z"></path>
              </svg>
              <div className="text-white">
                <p className="opacity-80 font-bold font-mono">Now Playing</p>
                <p className="text-[1.3rem]">All Along the Watch Tower</p>
              </div>
            </a>
          </div>
          <div className="p-10 lg:p-0 md:w-[60rem] flex flex-col gap-6 md:gap-12">
            <h2 className="text-[2rem] md:text-[4rem] lg:text-[4.7rem] mt-4 md:mt-10 text-white flex flex-col">
              <span>
                <Typewriter
                  words={["A Developer", "A Designer", "An Enthusiast"]}
                  typeSpeed={100}
                  loop={0}
                  cursor
                  deleteSpeed={50}
                />
              </span>{" "}
              working remotely from İzmir, Türkiye.
            </h2>
            <p className="text-white/70 text-[1.2rem]  flex flex-col gap-4 md:gap-8 font-mono">
              I studied architecture. Throughout my education, driven by my
              interest in technology and design, I endeavored to improve myself
              in graphic design and web development. I have participated in
              numerous freelance projects in these areas both individually and
              as part of different teams.
              <span className="font-mono">
                To keep my creativity fresh, I play guitar and bass. I also
                engage in drawing using both digital and traditional methods
              </span>
            </p>
          </div>
        </div>
        <h2 className="text-white/80 text-[5rem] md:text-[7rem] mt-8 lg:mt-24 xl:mt-36 -mb-4  text-center">
          My Tool Box
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 p-8 md:p-28 md:pt-12  xl:p-0 xl:pt-20">
          <div className="bg-white/10 border-2 border-white/15 justify-between h-[20rem] w-full rounded-[2.75rem] flex flex-col gap-4 p-9 pr-7 pt-6">
            <div className="flex items-start justify-between">
              <h2 className="text-white/60 font-extralight text-[5rem]">01</h2>
              <div className="rounded-full aspect-square bg-white/15 border-2 border-white/15 h-[7rem] flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-[3rem]">
                  code
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-col gap-4 items-start justify-between -mt-6">
              <h3 className="text-white/80 text-[2rem] text-right">
                Web Developing
              </h3>
              <div className="flex gap-4 ">
                <div className="group relative">
                  <img src="toolLogos/css.svg" alt="css logo" />{" "}
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    css
                  </span>
                </div>
                <div className="group relative">
                  <img src="toolLogos/html.svg" alt="html logo" />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    html
                  </span>
                </div>
                <div className="group relative">
                  <img
                    src="toolLogos/js.svg"
                    alt="js logo"
                    className="rounded-xl h-[3.8rem]"
                  />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    javascript
                  </span>
                </div>
                <div className="group relative">
                  <img src="toolLogos/react.svg" alt="react logo" />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    React
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 border-2 border-white/15 justify-between h-[20rem] w-full rounded-[2.75rem] flex flex-col gap-4 p-9 pr-7 pt-6">
            <div className="flex items-start justify-between">
              <h2 className="text-white/60 font-extralight text-[5rem]">02</h2>
              <div className="rounded-full aspect-square bg-white/15 border-2 border-white/15 h-[7rem] flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-[3rem]">
                  draw_collage
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-col gap-4 items-start justify-between -mt-6">
              <h3 className="text-white/80 text-[2rem] text-right">
                Designing
              </h3>
              <div className="flex gap-4 ">
                <div className="group relative">
                  <img
                    src="toolLogos/ps.svg"
                    alt="ps logo"
                    className="rounded-xl h-[4.1rem]"
                  />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    Photoshop
                  </span>
                </div>
                <div className="group relative">
                  <img
                    src="toolLogos/ai.svg"
                    alt="ai logo"
                    className="rounded-xl h-[4.1rem]"
                  />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    Illustrator
                  </span>
                </div>
                <div className="group relative">
                  <img
                    src="toolLogos/id.svg"
                    alt="id logo"
                    className="rounded-xl h-[4.1rem]"
                  />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    InDesign
                  </span>
                </div>
                <div className="group relative">
                  <img
                    src="toolLogos/figma.svg"
                    alt="figma logo"
                    className="rounded-xl h-[3.7rem]"
                  />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    Figma
                  </span>
                </div>
                <div className="group relative">
                  <img
                    src="toolLogos/blender.svg"
                    alt="blender logo"
                    className="rounded-xl h-[3.7rem]"
                  />
                  <span className="absolute hidden font-mono group-hover:block top-[-3.5rem] text-[1.5rem] text-white bg-black/90 px-3 p-1 rounded-xl">
                    Blender
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 border-2 border-white/15 justify-between h-[20rem] w-full rounded-[2.75rem] flex flex-col gap-4 p-9 pr-7 pt-6">
            <div className="flex items-start justify-between">
              <h2 className="text-white/60 font-extralight text-[5rem]">03</h2>
              <div className="rounded-full aspect-square bg-white/15 border-2 border-white/15 h-[7rem] flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-[3rem]">
                  palette
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-col gap-4 items-start justify-between -mt-6">
              <h3 className="text-white/80 text-[2rem] text-right">Painting</h3>
              <div className="flex -ml-2 gap-4 ">
                <div className="group flex bg-white/20 text-white items-center justify-center px-8 p-5 rounded-full gap-5 ">
                  <span class="material-symbols-outlined">stylus_note</span>
                  <p className="font-mono text-[1.2rem]">Charcoal</p>
                </div>
                <div className="group flex bg-white/20 text-white items-center justify-center px-8 p-5 rounded-full gap-5">
                  <span class="material-symbols-outlined">brush</span>
                  <p className="font-mono text-[1.2rem]">Acrylic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 border-2 border-white/15 justify-between h-[20rem] w-full rounded-[2.75rem] flex flex-col gap-4 p-9 pr-7 pt-6">
            <div className="flex items-start justify-between">
              <h2 className="text-white/60 font-extralight text-[5rem]">04</h2>
              <div className="rounded-full aspect-square bg-white/15 border-2 border-white/15 h-[7rem] flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-[3rem]">
                  piano
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-col gap-4 items-start justify-between -mt-6">
              <h3 className="text-white/80 text-[2rem] text-right">Music</h3>
              <div className="flex -ml-2 gap-4 ">
                <div className="group flex bg-white/20 text-white items-center justify-center px-8 p-5 rounded-full gap-5 ">
                  <img
                    src="toolLogos/guitar.svg"
                    alt="guitar"
                    className="h-8"
                  />
                  <p className="font-mono text-[1.2rem]">Guitar</p>
                </div>
                <div className="group flex bg-white/20 text-white items-center justify-center px-8 p-5 rounded-full gap-5">
                  <img
                    src="toolLogos/bass-guitar.svg"
                    alt="bass-guitar"
                    className="h-10"
                  />
                  <p className="font-mono text-[1.2rem]">Bass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 p-8 items-center justify-center">
          <h4 className="mt-16 xl:mt-32 text-[3rem] text-white text-center">
            Check out the archive
          </h4>
          <p className="text-white/60 font-mono text-[1.5rem] max-w-[60rem] text-center">
            You can find some drawings, sketches made by me, and some photos
            I've taken while wandering around. You might discover a few things
            you like.
          </p>
          <NavLink activeClass="active" to="/portfolio/archive">
            <div className="flex m-auto mt-4 lg:mt-8 gap-4 lg:gap-8">
              <img
                src="archiveList/30.jpg"
                alt="a"
                className="w-[20rem] md:w-[30rem] lg:w-[40rem] h-[15rem] md:h-[20rem] rounded-[2rem] object-cover"
              />
              <img
                src="archiveList/1.jpg"
                alt="a"
                className=" h-[15rem] md:h-[20rem] rounded-[2rem] object-cover"
              />
            </div>
            <div className="flex m-auto mt-4 lg:mt-8 gap-4 lg:gap-8">
              <img
                src="archiveList/11.jpg"
                alt="a"
                className=" h-[15rem] md:h-[20rem] rounded-[2rem] object-cover"
              />
              <img
                src="archiveList/23.jpg"
                alt="a"
                className=" h-[15rem] md:h-[20rem] w-[20rem] md:w-[30rem] lg:w-[40rem] rounded-[2rem] object-cover"
              />
            </div>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
