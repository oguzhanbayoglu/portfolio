import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [sent, setSent] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fgftwxc", "template_ppmsvjv", form.current, {
        publicKey: "KadLPGwYN1Vgw_Xek",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSent("sent");
          // setTimeout(() => {
          //   setSent("");
          // }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSent("notSent");
        }
      );
  };

  return (
    <>
      <div className="gradBG absolute top-0  h-[60%] w-full lg:h-full "></div>
      <div className="z-30 flex items-center justify-center flex-col w-full h-full m-auto">
        <h2 className="text-[5rem] md:text-[8rem] lg:text-[10rem] mt-44 md:mt-60 xl:mt-52 min-[2000px]:mt-80 text-white/70 text-wrap">
          Get in touch
        </h2>
        {sent == "sent" ? (
          <h2 className="text-[2rem] text-white/70 text-wrap">
            Thank you for reaching out
          </h2>
        ) : sent == "notSent" ? (
          <h2 className="text-[2rem] text-white/70 text-wrap">
            Please try again later
          </h2>
        ) : (
          ""
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 z-50 text-white flex flex-col gap-2"
        >
          <label className="text-[2rem]">Your Name</label>
          <input
            type="text"
            name="from_name"
            className="rounded-full h-16 bg-white/20 indent-4"
          />
          <label className="text-[2rem]">Your Email</label>
          <input
            type="email"
            name="from_email"
            className="rounded-full h-16 bg-white/20 indent-4"
          />
          <label className="text-[2rem]">Your Message</label>
          <textarea
            name="message"
            className="h-52 md:h-72 w-[27rem] md:w-[90dvw] xl:w-[60dvw] min-[2000px]:h-[24rem] min-[2000px]:w-[40dvw] bg-white/20 rounded-[2rem] indent-4 pt-4"
          />
          <button type="submit" className="mt-8 md:mt-16 lg:mt-20 ">
            {sent == "" ? (
              <span className="material-symbols-outlined transition-all duration-300 text-[3.5rem] lg:text-[5rem] lg: text-white/70  hover:rotate-45  p-4 pt-5 border-white/50 border-2 md:border-4 rounded-full">
                arrow_outward
              </span>
            ) : sent == "sent" ? (
              <span className="material-symbols-outlined transition-all duration-300 text-[3.5rem] lg:text-[5rem] text-white/70  hover:rotate-45  p-4 pt-5 border-white/50 border-2 md:border-4 rounded-full">
                check
              </span>
            ) : (
              <span className="material-symbols-outlined transition-all duration-300 text-[3.5rem] lg:text-[5rem] text-white/70  hover:rotate-45  p-4 pt-5 border-white/50 border-2 md:border-4 rounded-full">
                close
              </span>
            )}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
