import React from 'react';
import Landing from './Sections/Landing.jsx';  // Make sure Home is properly imported
import Scroll from './UI/Scroll.jsx';
import ExperienceSection from './Sections/ExperienceSection.jsx';
import About from './Sections/About.jsx';
import Footer from './Sections/Footer.jsx';
import Project from './Sections/Project.jsx'
import Technologies from './Sections/Technologies.jsx'
import Contact from './Sections/Contact.jsx'
import CertificatesSection from './Sections/CertificatesSection.jsx'

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
         <Contact/>
         <Footer/>
      </Scroll>
    </div>
  );
}

export default App;
