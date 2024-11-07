'use client'
import React, { useRef } from "react";
import { useBioReveal } from "../Hooks/gsap";
const Bio = () => {
  const boiRef = useRef(null);
  useBioReveal(boiRef, 2);
  return (
    <div className="boi mt-20 container mx-auto overflow-hidden p-7 sm:p-3 lg:p-0 xl:p-0  ">
      <p ref={boiRef}>
        Hi! I am a MERN stack developer skilled in designing and implementing
        responsive, interactive web applications using Next.js, React,
        TypeScript, MongoDB, Tailwind CSS, Node.js, and Redux. I excel at
        crafting dynamic user experiences that drive interaction and boost
        engagement across the full stack.{" "}
      </p>
    </div>
  );
};

export default Bio;
