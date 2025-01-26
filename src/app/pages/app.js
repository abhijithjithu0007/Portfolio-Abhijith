"use client";
import { useRef } from "react";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import { useCustomCursor } from "../Hooks/useCustomCursor";
import { useSmoothScroll } from "../Hooks/useSmoothScroll";
import FireworksEffect from "../Hooks/customClick";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);

  return (
    <div className="app p-0 sm:p-10">
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <FireworksEffect />
      <Navbar />
      <Socials />
      <Home />
      <Navbar footerNav />
      <Footer />
    </div>
  );
};

export default App;
