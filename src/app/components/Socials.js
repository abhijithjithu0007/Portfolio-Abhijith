"use client";

import { useRef } from "react";
import { useSocialReveal } from "../Hooks/anime";
const data = [
  {
    id: 1,
    title: "Github",
    url: "https://github.com/abhijithjithu0007",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://linkedin.com/in/abhijith-v-a19211281",
  },
];

const Socials = () => {
  const socialRef = useRef(null);
  useSocialReveal(socialRef, 2);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90  origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          className="hover:text-[#0760fa] duration-300"
          rel="noreferrer"
          key={social.id}
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
