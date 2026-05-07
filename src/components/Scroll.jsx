import React, { useCallback, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Navb from "./Navb";

const Scroll = ({ children }) => {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  const handleClick = useCallback((targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetElement);
      } else {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    const handleVisibility = () => {
      if (document.hidden) {
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
      } else if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(raf);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div className="bg-[#030014]">
        <Navb handleClick={handleClick} />
      {children}
    </div>
  );
};

export default Scroll;
