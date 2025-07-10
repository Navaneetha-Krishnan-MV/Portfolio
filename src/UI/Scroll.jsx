import React, { useCallback, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Navb from "../Sections/Navb";

const raf = (lenis) => (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf(lenis));
};

const Scroll = ({ children }) => {
  const lenisRef = useRef(null);

  const handleClick = useCallback((targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement);
    }
  }, []);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
        smooth: true,
      });
      requestAnimationFrame(raf(lenisRef.current));
    }
  }, []);

  return (
    <div className="bg-[#030014]">
        <Navb handleClick={handleClick} />
      {children}
    </div>
  );
};

export default Scroll;