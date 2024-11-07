'use client'


import React, { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import { useImageReveal, useHeadLineReveal } from "../Hooks/gsap";
const Hero = () => {
  const data = {
    img1: "https://res.cloudinary.com/dgjjgijyu/image/upload/v1675868936/portfolio-project/hero-1_tjrcuk.jpg",
    img2: "https://res.cloudinary.com/dgjjgijyu/image/upload/v1675868832/portfolio-project/hero-2_ewchqt.png",
  };

  const heroImageRef = useRef(null);

  const heroHeadLine1Ref = useRef(null);
  const heroHeadLine2Ref = useRef(null);
  const headlines = [heroHeadLine1Ref, heroHeadLine2Ref];
  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadLineReveal(headlines, 1.5);
  return (
    <div className="hero p-5 sm:p-3 lg:p-2 xl:p-0 container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left">
        <h1
          ref={heroHeadLine1Ref}
          className="text-6xl p-5 sm:p-3 lg:p-2 xl:p-0  md:text-7xl lg:text-9xl xl:text-[10rem]"
        >
          MERN-Stack
        </h1>
      </div>

      <div className="shutter shutter-right">
        <h1 className="text-6xl p-5 sm:p-3 lg:p-2 xl:p-0 md:text-7xl lg:text-9xl xl:text-[10rem]" ref={heroHeadLine2Ref}>Developer</h1>
      </div>
    </div>
  );
};

export default Hero;
