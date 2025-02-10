import React, { useState } from 'react';

const Education = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const togglePanel = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active section
    };

    return (
        <div className="container-lg bg-black text-secondary ps-5 py-5">

            <p className='m-0 mt-5 text-white'>Study</p>
            <h2 className='fw-bold text-warning'>Educational Qualifications</h2>
            <div className='row py-5 pe-3'>
                <button
                    className={`accordion ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => togglePanel(0)}
                >
                    B.ed with Mathematics
                    <span className="accordion-symbol">
                        {activeIndex === 0 ? '−' : '+'}
                    </span>
                </button>
                <div className="panel" style={{ maxHeight: activeIndex === 0 ? '200px' : '0' }}>
                    <p>
                        Completed B.Ed with a specialization in Mathematics. This enhanced my problem-solving skills and logical thinking, which significantly contributes to my understanding and approach to coding and algorithm design.
                    </p>
                </div>

                <button
                    className={`accordion ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => togglePanel(1)}
                >
                    Bachelor Degree of Arts
                    <span className="accordion-symbol">
                        {activeIndex === 1 ? '−' : '+'}
                    </span>
                </button>
                <div className="panel" style={{ maxHeight: activeIndex === 1 ? '200px' : '0' }}>
                    <p>
                        Graduated with a Bachelor of Arts subject. The deep understanding of computer concepts developed my analytical skills, which help me grasp complex coding logic and algorithms efficiently.
                    </p>
                </div>

                <button
                    className={`accordion ${activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => togglePanel(2)}
                >
                    Senior Secondary Education
                    <span className="accordion-symbol">
                        {activeIndex === 2 ? '−' : '+'}
                    </span>
                </button>
                <div className="panel" style={{ maxHeight: activeIndex === 2 ? '200px' : '0' }}>
                    <p>
                        Completed senior secondary education in the non-medical stream, focusing on subjects like Mathematics and Physics. This strengthened my logical reasoning and ability to understand complex coding concepts and problem-solving techniques.    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;
