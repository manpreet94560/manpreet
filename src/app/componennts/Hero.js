import About from "./About"
import Experties from "./Experties"
import Skill from "./Skills"
import Education from "./Education"
import Experience from "./Experience"
import Work from "./Work"
import Contact from "./Contact"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
export default function Hero() {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          once: true, 
          easing: 'ease-in-out', 
        });
      }, []);
    return (
        <>
            <div className="hero-section Home" id="Home">
            <img
          src="/home.jpg"
          alt=""
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        
        <div className="hero-content container-lg">
            
            <div className="row">
                <div className="col-lg-6 ps-lg-5">
          <span className="hero-subtitle">MERN Stack Developer</span>
          <h1 className="hero-title">Building <span className="text-warning">Dynamic Website</span>  with MERN Stack</h1>
          <p className="hero-description">
          I create dynamic applications that not only impress users but also drive business success. By leveraging the strengths of MongoDB, Express, React, and Node.js, I deliver seamless and responsive experiences that meet modern demands.</p>
          <a href="/manpreet.pdf" download={"/manpreet.pdf"}>
          <button className="portfolio-btn" >
            Download CV
          </button></a>
          </div>
            </div>
        </div>
            </div>
            <div id="About" className="About" >
                <About />
            </div>
            <div id="Experties" className="Experties">
                <Experties />
            </div>
            <div id="Skill" className="Skill">
                <Skill />
            </div>
            <div id="Education" className="Education">
                <Education />
            </div>
            <div id="Experience" className="Experience">
                <Experience />
            </div>
            <div id="Work" className="Work">
                <Work />
            </div>
            <div id="Contact" className="Contact">
                <Contact />
            </div>
        </>
    );
}
