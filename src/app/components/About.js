"use client";

import React, { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";
import { useProjectLeftrightReveal } from "../Hooks/anime";
import Image from "next/image";

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  // const profile = "/assets/images/profile.png";
  const discus = "/assets/images/discussion.jpg";

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, discus);
  useProjectLeftrightReveal(aboutRefs);

  return (
    <div className="about-section p-4 container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 flex flex-col md:flex-row gap-20 overflow-hidden">
        <div className="">
          <Image
            src={discus}
            alt=""
            width={500}
            height={500}
            className="w-full h-[400px] object-cover"
            ref={aboutLeftRef}
          />
        </div>
        <div className="about-right flex-1" ref={aboutRightRef}>
          <p>
            Self-taught MERN Stack Developer with extensive expertise in
            JavaScript, Node.js, and React.js. Proficient in architecting
            scalable backend systems and integrating them with dynamic
            front-ends. Committed to delivering high-impact solutions on time
            while continuously seeking to enhance skills and elevate user
            experiences. Passionate about problem-solving and contributing to
            collaborative team environments.
          </p>
          <p className="mt-10">
            Whether you are looking for a new web developer for your team or
            just interested in my work, this portfolio website provides a
            comprehensive look at my skills and experience. If you have any
            questions or would like to learn more about my work, please feel
            free to reach out via the contact form on the website.
          </p>
          <a
            href="https://drive.google.com/file/d/1-P9j_B41JrcVnmyA1YloDzGEvDjpremt/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
