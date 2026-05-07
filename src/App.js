import React from 'react';
import Landing from './sections/Landing.jsx';  // Make sure Home is properly imported
import Scroll from './components/Scroll.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Project from './sections/Project.jsx'
import Technologies from './sections/Technologies.jsx'
import Contact from './sections/Contact.jsx'
import CertificatesSection from './sections/CertificatesSection.jsx'

import Stats from './sections/Stats.jsx'

function App() {
  return (
    <div className="App bg-black text-white" >
      <Scroll>
         <Landing />  
         <About/>
         <ExperienceSection/>
         <Project/>
         <CertificatesSection/>
         <Technologies/>
         <Stats/>
         <Contact/>
         <Footer/>
      </Scroll>
    </div>
  );
}

export default App;
