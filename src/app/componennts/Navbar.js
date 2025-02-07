import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    var [Bar, setBar] = useState("");
    var [DSL, setDSL] = useState("none");

    function Visible() {
        setBar("0px")
        setDSL("block")
    }
    function Disable() {
        setBar("-360px")
        setDSL("none")
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
                <button className="navbtn btn fa fa-bars  text-white" onClick={Visible}></button>
            </div>

            <nav className="sidebar" style={{ marginLeft: `${Bar}` }}>

                <button className='navbtn2 btn fa fa-close text-white'
                    style={{ display: `${DSL}` }} onClick={Disable}>

                </button>

                <Link href="/" className=' pb-3 ps-4'>
                    <Image
                        src="/MP.png"
                        alt="Hero Image"
                        width={120}
                        height={100}
                    />
                </Link>

                <div className="nav-links pt-5">
                    <Link href="#Home" className={`nav-link ${activeSection === 'Home' ? 'active' : ''}`}>HOME</Link>
                    <Link href="#About" className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}>ABOUT</Link>
                    <Link href="#Experties" className={`nav-link ${activeSection === 'Experties' ? 'active' : ''}`}>EXPERTISE</Link>
                    <Link href="#Skill" className={`nav-link ${activeSection === 'Skill' ? 'active' : ''}`}>SKILL</Link>
                    <Link href="#Education" className={`nav-link ${activeSection === 'Education' ? 'active' : ''}`}>EDUCATION</Link>
                    <Link href="#Experience" className={`nav-link ${activeSection === 'Experience' ? 'active' : ''}`}>EXPERIENCE</Link>
                    <Link href="#Work" className={`nav-link ${activeSection === 'Work' ? 'active' : ''}`}>WORK</Link>
                    <Link href="#Contact" className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`}>CONTACT</Link>
                </div>

                <div className="copyright pt-5 mt-3 ps-3">
                    Copyright ©2025 All rights reserved by Manpreet
                </div>
            </nav>
        </>
    );
}
