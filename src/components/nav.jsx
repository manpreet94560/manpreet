import { useState, useEffect } from 'react';
import Img from '../Assets/MP.png'
import { Link } from 'react-router-dom';  // Use react-router-dom's Link for navigation

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    const [Bar, setBar] = useState("");
    const [DSL, setDSL] = useState("none");

    function Visible() {
        setBar("0px");
        setDSL("block");
    }

    function Disable() {
        setBar("-360px");
        setDSL("none");
    }

    const handleScroll = () => {
        const sections = ['Home', 'About', 'Experties', 'Skill', 'Education', 'Experience', 'Work', 'Contact'];
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const offset = element.offsetTop - 100;
                const height = element.offsetHeight;

                if (scrollPosition >= offset && scrollPosition < offset + height) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="hide">
                <button className="navbtn btn fa fa-bars text-white" onClick={Visible}></button>
            </div>

            <nav className="sidebar" style={{ marginLeft: `${Bar}` }}>

                <button 
                    className="navbtn2 btn fa fa-close text-white"
                    style={{ display: `${DSL}` }} 
                    onClick={Disable}>
                </button>

                {/* Image and heading placeholder */}
                <Link to="/" className='pb-3 ps-4'>
                    {/* <h1>helloo0</h1> */}
                    <img src={Img} alt="" height={"80px"} />
                </Link>

                <div className="nav-links pt-5">
                    <Link to="#Home" className={`nav-link ${activeSection === 'Home' ? 'active' : ''}`}>HOME</Link>
                    <Link to="#About" className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}>ABOUT</Link>
                    <Link to="#Experties" className={`nav-link ${activeSection === 'Experties' ? 'active' : ''}`}>EXPERTISE</Link>
                    <Link to="#Skill" className={`nav-link ${activeSection === 'Skill' ? 'active' : ''}`}>SKILL</Link>
                    <Link to="#Education" className={`nav-link ${activeSection === 'Education' ? 'active' : ''}`}>EDUCATION</Link>
                    <Link to="#Experience" className={`nav-link ${activeSection === 'Experience' ? 'active' : ''}`}>EXPERIENCE</Link>
                    <Link to="#Work" className={`nav-link ${activeSection === 'Work' ? 'active' : ''}`}>WORK</Link>
                    <Link to="#Contact" className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}>CONTACT</Link>
                </div>

                <div className="copyright pt-5 mt-3 ps-3">
                    Copyright ©2025 All rights reserved
                </div>

            </nav>
        </>
    );
}
