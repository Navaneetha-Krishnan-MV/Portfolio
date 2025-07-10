import React, { useState, useEffect } from 'react';
import me from "../myimage.jpg";
import { ReactTyped as Typed } from "react-typed";


function Landing() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('header a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => links.forEach(link => link.removeEventListener('click', smoothScroll));
  }, []);

  return (
    <div id="home" style={{ minHeight: '50vh', backgroundColor: 'black' }}>
      <main className="pt-48 container mx-auto px-4 py-8">
        <section id="intro" className="mb-16 text-center">
          <img
            src={me}
            alt="Navaneethakrishnan M V"
            className="w-64 h-64 rounded-full mx-auto mb-8 border-4 border-blue shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient">
            Hey, I'm Navaneethakrishnan <span className='text-white'>👋</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300 text-white text-4xl tracking-tight">
           I am a{" "}
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-red-400">
            <Typed
              strings={[
                    "Cloud Enthusiast",
                   "Full Stack Developer",
                     "Programmer"
                     ]}
             typeSpeed={50}
             backSpeed={30}
             loop
             />
           </span>
          </p>

        </section>
      </main>
    </div>
  );
}

export default Landing;
