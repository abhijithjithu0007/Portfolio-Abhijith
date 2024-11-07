'use client'

import { useRef } from "react";
import { useLinkReveal } from "../Hooks/anime";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);
  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];
  useLinkReveal(links, 2);

  return (
    <nav
      className={`flex justify-between p-10 sm:p-0 md:p-0 container mx-auto ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className="logo">
        <a href="#home" className="link-item" ref={link1Ref}>
          {footerNav ? "Go to top" : "Abhijith V"}
        </a>
      </div>

      <ul className="links flex flex-col gap-3">
        <li>
          <a href="#home" className="link-item" ref={link2Ref}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="link-item" ref={link3Ref}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="link-item" ref={link4Ref}>
            Skills
          </a>
        </li>
        <li>
          <a href="#about" className="link-item" ref={link5Ref}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="link-item" ref={link6Ref}>
            Contact
          </a>
        </li>
        <li>
          <a
            className="link-item"
            href="https://docs.google.com/document/d/1MQeo-_haxjE8SVT3h3A4pONv9t4qOdlcBIUjWQd0a4U/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            ref={link7Ref}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
