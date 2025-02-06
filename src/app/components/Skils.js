"use client";

import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useSkillLineReveal, useSkillTextReveal } from "../Hooks/anime";

const data = [
  { id: 1, skill: "HTML5" },
  { id: 2, skill: "CSS3" },
  { id: 3, skill: "Tailwind CSS" },
  { id: 4, skill: "JavaScript" },
  { id: 5, skill: "TypeScript" },
  { id: 6, skill: "React.js" },
  { id: 7, skill: "Next.js" },
  { id: 8, skill: "Redux" },
  { id: 9, skill: "TanStack Query" },
  { id: 10, skill: "Express.js" },
  { id: 11, skill: "Node.js" },
  { id: 12, skill: "MongoDB" },
  { id: 13, skill: "MySQL" },
  { id: 14, skill: "SASS" },
  { id: 15, skill: "Material UI" },
  { id: 16, skill: "Git" },
  { id: 17, skill: "GitHub" },
  { id: 18, skill: "Firebase" },
  { id: 19, skill: "Socket.io" },
  { id: 20, skill: "Jest.js" },
  { id: 21, skill: "Render" },
  { id: 22, skill: "Razorpay" },
  { id: 23, skill: "Self-Learning" },
  { id: 24, skill: "Scrum & Agile" },
  { id: 25, skill: "Redis" },
  { id: 26, skill: "Zustand" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skills p-4 container mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />
      <div className="skills-wrapper grid grid-cols-2 gap-10 mt-40">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.skill}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
