import { useEffect } from "react";
import Home from '../Assets/home.jpg'
import About from "./about";
import Experties from "./experties";
import Skill from "./skills";
import Education from "./education";
import Experience from "./experience";
import Work from "./work";
import Contact from "./contact";
export default function Hero() {


    return (
        <>
            <div className="hero-section Home" id="Home">
                <img
                    src={Home}
                    alt="Dynamic website with MERN stack"
                    className="hero-image"
                />
                <div className="hero-overlay"></div>

                <div className="hero-content container-fluid">
                    <div className="row">
                        <div className="col-lg-6 ps-lg-5">
                            <span className="text-secondary">MERN Stack Developer</span>
                            <h1 className="hero-title">
                                Building <span className="text-warning">Dynamic Website</span> with MERN Stack
                            </h1>
                            <p className="hero-description">
                                I create dynamic applications that not only impress users but also drive business success. By leveraging the strengths of MongoDB, Express, React, and Node.js, I deliver seamless and responsive experiences that meet modern demands.
                            </p>
                            <a href="/manpreet.pdf" download>
                                <button className="portfolio-btn">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="About" className="About">
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
            </div>

        </>
    );
}
