import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import ContactExperience from "../Components/ContactExperience.jsx";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import '../styles/Contact.css';
import {ReactTyped as Typed} from 'react-typed';  // Import react-typed

const Contact = () => {
  
  const formRef = useRef(null);
  const [formData, setFormData] = React.useState({
    name: "", 
    email: "",
    message: "",
  });

  const[loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Your EmailJS template ID                          
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),  // Current date and time
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,  // Your EmailJS public key
       
      );
      // Reset the form data after submission 
      setFormData({
        name: "",   
        email: "",
        message: "",
      });
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
    }catch(error){
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }finally{    
      setLoading(false);
    }
   
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the form data state with the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <section id="contact" className="bg-black w-full py-12">
      <h2 className="mb-20 text-center">
        <span className="section-title">
          Get in touch with me
        </span>
      </h2>  


      <div className="w-full h-full md:px-10 px-5 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Contact Form */}
        <div className="md:w-5/12 w-full">
          <h2 className="my-10 text-center text-4xl">
              <span >
        <Typed
          strings={["Ready to build scalable solutions?","Let's tune our skills together!"]}
          typeSpeed={70}  // Speed of typing
          backSpeed={20}  // Speed of backspacing
          loop   // Infinite loop of text
          className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 relative overflow-hidden"
        />
      </span>
          </h2>
          <div className="flex-center card-border rounded-xl p-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4" ref={formRef}>
            {/* Form fields */}
            <div className="col-span-12 md:col-span-6">
              <div className="mb-2">
                <label className="text-white text-md font-bold mb-2">Your Name</label>
              </div>  
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                autoComplete="name"
                required
                onChange={handleChange}
                placeholder="What's your name?"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="mb-2">
                <label className="text-white text-md font-bold mb-2">Your Email</label>
              </div>  
              <input
                type="email"
                placeholder="What's your email?"
                name="email"
                value={formData.email}
                required
                autoComplete="email"
                id="email"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="col-span-12">
              <div className="mb-2">
                <label className="text-white text-md font-bold mb-2">Your Message</label>
              </div> 
              <textarea
                placeholder="How can I help you?"
                rows="5"
                name = "message"
                required
                value={formData.message}
                autoComplete="message"
                id="message"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <div className="col-span-12">
              <button
               disabled={loading}
               type="submit"
               className="liquid-button"
              >
                 <span className="liquid-button-text">
                  {loading ? "Sending..." : "Send Message"}
                 </span>
               </button>
            </div>
          </form>
          </div>
        </div>

        {/* Three.js Model */}
        <div className="md:w-7/12 w-full h-96 md:h-[500px]">
           <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <ContactExperience />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;