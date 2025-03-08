import Abt from '../Assets/Frontend.png';
import Backend from '../Assets/Backend2.png';
import Back2 from '../Assets/Backedn.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function About() {

    useEffect(() => {
        Aos.init({
          duration: 1000, // Duration of the animation
          once: true, // Run animation only once when scrolling
        });
      }, []);
    return (
        <>
            <div className="container-lg bg-black text-secondary ps-5 py-5" > 

                <p className='m-0 mt-5 text-white'>About</p>
                <h2 className='fw-bold text-warning'>WHO AM I?</h2>

                <p className='pt-3'>I am Manpreet Singh, a B.Ed graduate with a strong foundation in mathematics.
                    My passion for technology led me to specialize in MERN stack development,
                    where I thrive on creating dynamic applications.</p>
                <p>With over a year of experience in both development and marketing,
                    I focus on building efficient web solutions. My goal is to enhance user engagement and
                    drive business growth through innovative technology and effective strategies.</p>

                <div className='row py-5'>
                    <div className='col-md-4 '>
                        <div className='box d-flex justify-content-center align-items-center'>
                            <div>
                                <img
                                    src={Abt}
                                    alt="Hero Image"
                                    width={100}
                                    height={80}

                                />
                                <p className=''>Frontend</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='box d-flex justify-content-center align-items-center'>
                            <div>
                                <img
                                    src={Backend}
                                    alt="Hero Image"
                                    width={100}
                                    height={80}

                                />
                                <p>Backend</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 '>
                        <div className='box d-flex justify-content-center align-items-center '>
                            <div>
                                <img
                                    src={Back2}
                                    alt="Hero Image"
                                    width={100}
                                    height={80}

                                />
                                <p>Digital Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='potive p-3' data-aos="flip-up">
                    <h2 className='fw-bold text-black ps-3'>I am happy to know you
                        that 10+ projects done sucessfully!</h2>
                        <a href='tel:+919781688960'>
                    <button className='btn btn-outline-dark ms-3 rounded-0'>Hire Me</button>
                    </a>
                </div>
            </div>
        </>
    )
}
