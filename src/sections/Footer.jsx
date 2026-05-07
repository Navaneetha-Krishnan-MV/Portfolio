import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return(
        <div>
              <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Navaneetha-Krishnan-MV" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/navaneethakrishnanmv07/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="mailto:navaneethank45@gmail.com" className="hover:text-red-400 transition-colors">
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
          <p className="text-gray-400">&copy; 2025 Navaneethakrishnan M V. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Crafted with React and Tailwind CSS</p>
        </div>
      </footer>
        </div>
    )
}

export default Footer;