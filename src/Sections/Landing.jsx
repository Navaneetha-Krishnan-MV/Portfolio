import React, { useState, useEffect } from 'react';
import { ReactTyped as Typed } from "react-typed";
import me from "../myimage.jpg";
import grainImage from "../assets/images/grain.jpg";
import {ReactComponent as StarIcon} from "../assets/icons/star.svg";
import {ReactComponent as SparkleIcon} from "../assets/icons/sparkle.svg";
import HeroOrbit from "../Components/HeroOrbit";


function Landing() {
  
  const spin = true;
  const orbit = true;
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
    <div id="home" className="relative min-h-screen overflow-hidden overflow-x-clip bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div 
          className="absolute inset-0 -z-30 opacity-10" 
          style={{ backgroundImage: `url(${grainImage})` }}
        ></div>
        
        {/* Animated rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Animated icons */}
        
        <HeroOrbit size={760} shouldSpin={spin} spinDuration="4s" shouldOrbit={orbit} orbitDuration="32s" rotate={10}>
          <SparkleIcon className="size-6 text-cyan-400/40"/>
        </HeroOrbit>
        <HeroOrbit size={1030} shouldOrbit={orbit} shouldSpin={spin} spinDuration="5s" orbitDuration="32s" rotate={40}>
          <div className="size-3 rounded-full bg-cyan-400/40"/>
        </HeroOrbit>
        <HeroOrbit size={1050} shouldOrbit={orbit} shouldSpin={spin} spinDuration="6s" orbitDuration="32s" rotate={100}>
          <SparkleIcon className="size-14 text-cyan-400/40"/>
        </HeroOrbit>
        <HeroOrbit size={580} shouldOrbit={orbit} shouldSpin={spin} spinDuration="5s" orbitDuration="32s" rotate={290}>
          <SparkleIcon className="size-8 text-cyan-400/40"/>
        </HeroOrbit>
        <HeroOrbit size={780} shouldOrbit={orbit} shouldSpin={spin} spinDuration="6s" orbitDuration="32s" rotate={330}>
          <StarIcon className="size-16 text-cyan-400/80"/>
        </HeroOrbit>
        <HeroOrbit size={890} shouldOrbit={orbit} shouldSpin={spin} spinDuration="4s" orbitDuration="32s" rotate={55}>
          <StarIcon className="size-14 text-cyan-400/80"/>
        </HeroOrbit>
        <HeroOrbit size={950} shouldSpin={spin} spinDuration="5s" shouldOrbit={orbit} orbitDuration="32s" rotate={300}>
          <div className="size-3 rounded-full bg-cyan-400/30"/>
        </HeroOrbit>
        <HeroOrbit size={540} shouldSpin={spin} spinDuration="5s" shouldOrbit={orbit} orbitDuration="32s" rotate={45}>
          <SparkleIcon className="size-5 text-cyan-400/30"/>
        </HeroOrbit> 
        <HeroOrbit size={700} shouldSpin={spin} spinDuration="5s" shouldOrbit={orbit} orbitDuration="32s" rotate={270}>
          <div className="size-3 rounded-full bg-cyan-400/30"/>
        </HeroOrbit>
        <HeroOrbit size={620} shouldOrbit={orbit} shouldSpin={spin} spinDuration="6s" orbitDuration="32s" rotate={135}>
          <StarIcon className="size-8 text-cyan-400/80"/>
        </HeroOrbit>
        <HeroOrbit size={660} shouldOrbit={orbit} shouldSpin={spin} spinDuration="6s" orbitDuration="32s" rotate={180}>
          <StarIcon className="size-14 text-cyan-400/80"/>
        </HeroOrbit>
        <HeroOrbit size={820} shouldOrbit={orbit} shouldSpin={spin} spinDuration="6s" orbitDuration="32s" rotate={235}>
          <StarIcon className="size-24 text-cyan-400/80"/>
        </HeroOrbit>
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-64 pb-8">
        <section id="intro" className="mb-16 text-center">
          <img 
            src={me} 
            alt="Navaneethakrishnan M V"
            width={256}
            height={256}
            className="w-64 h-64 rounded-full mx-auto mb-8 border-2 border-cyan-400/80 shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient">
            Hey, I'm Navaneethakrishnan <span className='text-white'>👋</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-white tracking-tight">
           I am a{" "}
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-red-400">
            <Typed
              strings={[
                    "AI and Cloud Enthusiast",
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
