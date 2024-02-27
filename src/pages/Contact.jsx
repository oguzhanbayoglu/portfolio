import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const Contact = () => {
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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="gradBG absolute top-0  h-[60%] w-full lg:h-full "></div>
      <div className="z-30 flex items-center justify-center flex-col">
        <h2 className="text-[5rem] mt-48 text-white/70 ">Get in touch</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-16 z-50 text-white flex flex-col gap-2"
        >
          <label className="text-[2rem]">Your Name</label>
          <input
            type="text"
            name="from_name"
            className="rounded-full h-16 bg-white/20"
          />
          <label className="text-[2rem]">Your Email</label>
          <input
            type="email"
            name="from_email"
            className="rounded-full h-16 bg-white/20"
          />
          <label className="text-[2rem]">Your Message</label>
          <textarea
            name="message"
            className="h-40 w-[27rem] bg-white/20 rounded-[2rem]"
          />
          <button type="submit" className="mt-8">
            <span className="material-symbols-outlined text-[2rem] md:text-[3.5rem]  hover:rotate-45  p-4 pt-5 border-neutral-50 border-2 md:border-4 rounded-full">
              arrow_outward
            </span>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
