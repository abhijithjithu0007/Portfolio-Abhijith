"use client";

import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { useInputFieldReveal } from "../Hooks/anime";
import emailjs from "@emailjs/browser";
import * as Toast from "@radix-ui/react-toast";

const Contact = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const btnRef = useRef(null);
  const contactFieldRef = [nameRef, emailRef, messageRef, btnRef];
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  useInputFieldReveal(contactFieldRef, 1.5);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setToastMessage("Message Sent Successfully!");
          setToastType("success");
          setOpen(true);
        },
        () => {
          setToastMessage("Message Not Sent");
          setToastType("error");
          setOpen(true);
        }
      );

    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container p-4 mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10"
        ref={formRef}
      >
        <div className="form-control overflow-hidden" ref={nameRef}>
          <input
            type="text"
            placeholder="Write your name"
            name="fullName"
            required
            className="fullname bg-transparent border py-4 md:py-16 px-4 md:px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full placeholder:text-white/50"
          />
        </div>
        <div className="form-control overflow-hidden" ref={emailRef}>
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-4 md:py-16 px-4 md:px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full placeholder:text-white/50"
          />
        </div>
        <div
          className="form-control overflow-hidden col-span-1 md:col-span-2"
          ref={messageRef}
        >
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="3"
            className="message bg-transparent border py-4 md:py-16 px-4 md:px-28 rounded-xl sm:rounded-full md:rounded-full xl:rounded-full border-white/20 outline-none focus:border-cyan-400 duration-300 w-full resize-none placeholder:text-white/50"
          />
        </div>

        <div
          className="form-control overflow-hidden col-span-1 md:col-span-2"
          ref={btnRef}
        >
          <input
            type="submit"
            value="Send message"
            className="uppercase cursor-pointer bg-transparent border py-4 md:py-16 px-4 md:px-28 rounded-full border-white/20 outline-none
        hover:bg-cyan-400/20 hover:border-cyan-400/20 focus:border-cyan-400 duration-300 w-full tracking-widest"
          />
        </div>
      </form>

      <Toast.Provider>
        <Toast.Root open={open} onOpenChange={setOpen} duration={4000}>
          <Toast.Title className="text-lg font-semibold text-white animate-fadeIn">
            {toastType === "success" ? "Success!" : "Error"}
          </Toast.Title>
          <Toast.Description className="text-sm text-white/80 animate-fadeIn">
            {toastMessage}
          </Toast.Description>
          <Toast.Action
            altText="Close"
            onClick={() => setOpen(false)}
            className="text-cyan-400 cursor-pointer animate-fadeIn"
          >
            Close
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-5 left-5 z-50 flex flex-col gap-4" />
      </Toast.Provider>
    </div>
  );
};

export default Contact;
