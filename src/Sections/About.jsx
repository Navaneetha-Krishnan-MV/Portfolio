import { motion } from "framer-motion";
import { SiGithub, SiHackerrank, SiGeeksforgeeks , SiLeetcode, SiLinkedin } from "react-icons/si";
import fullgif from "../full-stack-development.gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

const About = () => {
  return (
    <section id="about" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center lg:justify-between">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 mb-8 lg:mb-0 lg:pr-12"> {/* Changed width from 2/5 to 3/5 and added right padding */}
            <motion.h1 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="section-title"
            >
              About Me
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <p className="about-content">
                I am Navaneethakrishnan, a dedicated software developer driven by a relentless work ethic and a commitment to solving complex problems. I am constantly seeking opportunities to learn, grow, and evolve.
              </p>
              <p className="about-subtext">
                I thrive in building high-quality applications that seamlessly blend user experience with technical functionality.
              </p>
            </motion.div>

            {/* Social Icons */}
            <div className="flex gap-10 mt-10  items-center">
              <a href="https://github.com/Navaneetha-Krishnan-MV" target="_blank" rel="noopener noreferrer" className="text-white text-medium transition-colors">
                <SiGithub size={30} />
              </a>
              <a href="https://leetcode.com/u/Im_Thunder/" target="_blank" rel="noopener noreferrer" className="text-white text-medium hover:text-[#FFA116] transition-colors">
                <SiLeetcode size={30} />
              </a>
              <a href="https://www.hackerrank.com/profile/navaneethank45" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
                <SiHackerrank size={30} />
              </a>
              <a href="https://www.geeksforgeeks.org/user/navaneeta0ve/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition-colors">
                <SiGeeksforgeeks size={30} />
              </a>
              <a href="https://www.linkedin.com/in/navaneethakrishnanmv07/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                <SiLinkedin size={30} />
              </a>
            </div>


          </div>

          {/* Image */}
          <div className="w-full lg:w-2/5"> {/* Kept image width the same */}
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={fullgif} 
                alt="Full-stack development illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;