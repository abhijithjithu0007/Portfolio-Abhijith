'use client'

import { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import { useProjectLeftrightReveal } from "../Hooks/anime";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);
  const projectLeftRef = useRef(null);
  const projectRefs = [projectRightRef, projectLeftRef];

  
    useHoverEffect(projectRightRef, project.img1, project.img2);
    useProjectLeftrightReveal(projectRefs);
  
  

  return (
    <div className="project flex flex-col lg:grid lg:grid-cols-5 gap-5 p-5 lg:p-10 overflow-hidden">
      <div
        className="project-left flex flex-col gap-5 md:gap-8 lg:gap-10 col-span-3"
        ref={projectLeftRef}
      >
        <span className="text-5xl md:text-7xl lg:text-9xl text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-2xl md:text-4xl lg:text-5xl leading-relaxed text-cyan-400">
          {project.title}
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-white/75">
          {project.describe}
        </p>

        <span className="text-cyan-400 flex gap-2 md:gap-4 lg:gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <span key={i} className="text-xs md:text-sm lg:text-base">
              {tool}
            </span>
          ))}
        </span>

        <div className="flex flex-col text-center sm:flex-row gap-5 md:gap-8 lg:gap-10 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase text-sm md:text-base py-3 px-8 md:py-5 md:px-10 lg:py-8 lg:px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Live Site
          </a>

          <a
            href={project.fontEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase text-sm md:text-base py-3 px-8 md:py-5 md:px-10 lg:py-8 lg:px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Front-End Code
          </a>

          {project.backEndLink && (
            <a
              href={project.backEndLink}
              target="_blank"
              rel="noreferrer"
              className="uppercase text-sm md:text-base py-3 px-8 md:py-5 md:px-10 lg:py-8 lg:px-14 border border-white/25 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
            >
              Back-End Code
            </a>
          )}
        </div>
      </div>

      <div
        className="project-right col-span-2 justify-self-end"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
