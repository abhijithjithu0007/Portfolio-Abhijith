'use client'
import { useEffect } from "react";
import anime from "animejs";

// Helper function for scroll-triggered animations
const animateOnScroll = (el, animationParams) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        anime({
          targets: el,
          ...animationParams,
        });
        observer.unobserve(el); // Cleanup observer after triggering
      }
    },
    { threshold: 0.2 } // Adjust as needed for when the animation should trigger
  );
  observer.observe(el);
};

// Image Reveal Hook
export const useImageReveal = (el, delay = 0) => {
  useEffect(() => {
    if (el.current) {
      animateOnScroll(el.current, {
        translateY: ["-100vh", 0],
        duration: 2000,
        delay: delay * 1000,
        easing: "easeOutQuart",
      });
    }
  }, [el, delay]);
};

// Headline Reveal Hook
export const useHeadLineReveal = (items, delay = 0) => {
  useEffect(() => {
    const elements = items.map((item) => item.current).filter(Boolean);
    elements.forEach((el, index) => {
      animateOnScroll(el, {
        translateY: [500, 0],
        duration: 1000,
        delay: (delay + index * 0.2) * 1000,
        easing: "easeOutQuart",
      });
    });
  }, [items, delay]);
};

// Link Reveal Hook
export const useLinkReveal = (items, delay = 0) => {
  useEffect(() => {
    const elements = items.map((item) => item.current).filter(Boolean);
    elements.forEach((el, index) => {
      animateOnScroll(el, {
        opacity: [0, 1],
        duration: 2000,
        delay: (delay + index * 0.2) * 1000,
        easing: "easeOutQuart",
      });
    });
  }, [items, delay]);
};

// Bio Reveal Hook
export const useBioReveal = (el, delay = 0) => {
  useEffect(() => {
    if (el.current) {
      animateOnScroll(el.current, {
        translateY: [500, 0],
        duration: 1500,
        delay: delay * 1000,
        easing: "easeOutQuart",
      });
    }
  }, [el, delay]);
};

// Social Reveal Hook
export const useSocialReveal = (el, delay = 0) => {
  useEffect(() => {
    if (el.current) {
      animateOnScroll(el.current, {
        translateX: [-500, 0],
        duration: 1500,
        delay: delay * 1000,
        easing: "easeOutQuart",
      });
    }
  }, [el, delay]);
};

// Section Title Reveal Hook
export const useSectionTitleReveal = (el, delay = 0) => {
  useEffect(() => {
    if (el.current) {
      animateOnScroll(el.current, {
        translateY: [200, 0],
        duration: 1500,
        delay: delay * 1000,
        easing: "easeOutQuart",
      });
    }
  }, [el, delay]);
};

// Project Left-Right Reveal Hook
export const useProjectLeftrightReveal = (items, delay = 0) => {
  useEffect(() => {
    const elements = items.map((item) => item.current).filter(Boolean);
    elements.forEach((el, index) => {
      animateOnScroll(el, {
        translateY: [500, 0],
        duration: 2000,
        delay: (delay + index * 0.3) * 1000,
        easing: "easeOutQuart",
      });
    });
  }, [items, delay]);
};

// Skill Line Reveal Hook
export const useSkillLineReveal = (items) => {
  useEffect(() => {
    items.forEach((el) => {
      animateOnScroll(el, {
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutQuart",
        delay: anime.stagger(300),
      });
    });
  }, [items]);
};

// Skill Text Reveal Hook
export const useSkillTextReveal = (el) => {
  useEffect(() => {
    if (el.current) {
      animateOnScroll(el.current, {
        translateY: [200, 0],
        duration: 1000,
        easing: "easeOutQuart",
      });
    }
  }, [el]);
};

// Footer Reveal Hook
export const useFooterReveal = (item) => {
  useEffect(() => {
    if (item.current) {
      animateOnScroll(item.current, {
        translateY: [-100, 0],
        duration: 1000,
        easing: "easeOutQuart",
      });
    }
  }, [item]);
};

// Input Field Reveal Hook
export const useInputFieldReveal = (items, delay = 0) => {
  useEffect(() => {
    const elements = items.map((item) => item.current).filter(Boolean);
    elements.forEach((el, index) => {
      animateOnScroll(el, {
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: (delay + index * 0.2) * 1000,
        easing: "easeOutQuart",
      });
    });
  }, [items, delay]);
};
