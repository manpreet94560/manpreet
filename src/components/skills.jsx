import React, { useState, useEffect, useRef } from 'react';

export default function Skill() {
  const [photoshopProgress, setPhotoshopProgress] = useState(0);
  const [illustratorProgress, setIllustratorProgress] = useState(0);

  const [Node, setNode] = useState(0);
  const [HTML, setHTML] = useState(0);
 
  const progressRef = useRef(null);
   const animateProgress = (skill) => {
    const interval = setInterval(() => {
      if (skill === 'photoshop') {
        setPhotoshopProgress((prevProgress) => {
          if (prevProgress < 75) {
            return prevProgress + 1;
          }
          clearInterval(interval);
          return prevProgress;
        });
      }  if (skill === 'illustrator') {
        setIllustratorProgress((prevProgress) => {
          if (prevProgress < 85) {
            return prevProgress + 1;
          }
          clearInterval(interval);
          return prevProgress;
        });
      }

       if (skill === 'Node') {
        setNode((prevProgress) => {
          if (prevProgress < 80) {
            return prevProgress + 1;
          }
          clearInterval(interval);
          return prevProgress;
        });
      }

      if (skill === 'HTML') {
        setHTML((prevProgress) => {
          if (prevProgress < 95) {
            return prevProgress + 1;
          }
          clearInterval(interval);
          return prevProgress;
        });
      }
    }, 30); 
  };
  useEffect(() => {
    const handleScroll = () => {
      if (progressRef.current) {
        const rect = progressRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          animateProgress('photoshop');
          animateProgress('illustrator');
          animateProgress('Node');
          animateProgress('HTML');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container-lg bg-black text-secondary ps-5 py-5"  ref={progressRef}>
        <p className="m-0 mt-5 text-white">My Specialty</p>
        <h2 className="fw-bold text-warning">Technical SKILLS</h2>
        <p>
          I have strong knowledge of HTML, CSS, and Bootstrap for creating responsive web pages.
          I’m experienced in using React.js and Next.js for building interactive UIs,
          with Node.js and Express for backend development.
          I also have expertise in MongoDB, JavaScript, SEO, and Digital Marketing.
        </p>
        <div className="row py-3 progreess">
         
          <div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              HTML <span style={{ position: 'absolute', top: 22, left: `${HTML -6}%`, color: '#28a745' }}>{HTML}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${HTML}%`, backgroundColor: '#28a745' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${HTML - 2}%`, 
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                  }}
                ></span>
              </div>
            </div>
          </div>

          {/* Illustrator Progress */}
          <div className="col-md-5 yss" style={{ position: 'relative' }}>
            <p>
              CSS <span style={{ position: 'absolute', top: 22, left: `${HTML-6}%`, color: '#28a745' }}>{HTML}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${HTML}%`, backgroundColor: '#28a745' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${HTML - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              JavaScript <span style={{ position: 'absolute', top: 22, left: `${illustratorProgress-4}%`, color: '#28a745' }}>{illustratorProgress}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${illustratorProgress}%`, backgroundColor: '#28a745' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${illustratorProgress - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                  }}
                ></span>
              </div>
            </div>
          </div><div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              React Js <span style={{ position: 'absolute', top: 22, left: `${photoshopProgress - 4}%`, color: '#ffd700' }}>{photoshopProgress}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${photoshopProgress}%`, backgroundColor: '#ffd700' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${photoshopProgress - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ffd700',
                  }}
                ></span>
              </div>
            </div>
          </div><div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              Node Js <span style={{ position: 'absolute', top: 22, left: `${Node-4}%`, color: '#28a745' }}>{Node}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${Node}%`, backgroundColor: '#28a745' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${Node - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                  }}
                ></span>
              </div>
            </div>
          </div><div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              Express <span style={{ position: 'absolute', top: 22, left: `${photoshopProgress - 4}%`, color: '#ffd700' }}>{photoshopProgress}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${photoshopProgress}%`, backgroundColor: '#ffd700' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${photoshopProgress - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ffd700',
                  }}
                ></span>
              </div>
            </div>
          </div><div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              MongoDB <span style={{ position: 'absolute', top: 22, left: `${illustratorProgress-4}%`, color: '#28a745' }}>{illustratorProgress}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${illustratorProgress}%`, backgroundColor: '#28a745' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${illustratorProgress - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                  }}
                ></span>
              </div>
            </div>
          </div><div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              Digital Marketing <span style={{ position: 'absolute', top: 22, left: `${Node-4}%`, color: '#28a745' }}>{Node}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${Node}%`, backgroundColor: '#28a745' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${Node - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                  }}
                ></span>
              </div>
            </div>
          </div><div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              SEO <span style={{ position: 'absolute', top: 22, left: `${illustratorProgress-4}%`, color: '#28a745' }}>{illustratorProgress}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${illustratorProgress}%`, backgroundColor: '#28a745' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${illustratorProgress - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                  }}
                ></span>
              </div>
            </div>
          </div><div className="col-md-5" style={{ position: 'relative' }}>
            <p>
              Next Js <span style={{ position: 'absolute', top: 22, left: `${photoshopProgress - 4}%`, color: '#ffd700' }}>{photoshopProgress}%</span>
            </p>
            <div className="progress position-relative" style={{ height: '5px', overflow: 'visible' }}>
              <div className="progress-bar" style={{ width: `${photoshopProgress}%`, backgroundColor: '#ffd700' }}>
                <span
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    top: '-2px',
                    left: `${photoshopProgress - 2}%`, // Dynamic positioning of the circle
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ffd700',
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
