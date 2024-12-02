"use client";

import { useRef } from "react";
import { useFooterReveal } from "../Hooks/anime";
const Footer = () => {
  const footerRef = useRef(null);

  useFooterReveal(footerRef);
  return (
    <footer className="my-40 text-center text-white/50 overflow-hidden">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()}{" "}
        <a href="#home" className="link-item hover:text-white duration-500">
          Abhijith
        </a>
        . All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
