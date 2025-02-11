import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Image from 'next/image';
// import { Tilt } from 'react-tilt';

export default function Experties() {
  return (
    <>
      <div className="container-lg bg-black text-secondary ps-5 py-5">
        <p className='m-0 mt-5 text-white'>My Experties</p>
        <h2 className='fw-bold text-warning'>HERE ARE MY EXPERTISE</h2>

        <div className='row py-3'>
          <div className="col-md-4" data-aos="fade-up">
            {/* <Tilt options={{ max: 25, scale:1.0, speed: 300}}> */}
              <div className='card p-0 mx-3 rounded-0 bg-black text-secondary border mb-3'>
                <img src="/manage.jpeg" width={"100%"} alt="loading.." />
                <div className="card-body">
                  <h4 className="card-title">Manage Project</h4>
                  <p className="card-text">Skilled in organizing, leading teams, and delivering successful project outcomes.</p>
                </div>
              </div>
            {/* </Tilt> */}
          </div>

          <div className="col-md-4" data-aos="fade-up">
          {/* <Tilt options={{ max: 25, scale:1.0, speed: 300}}> */}
            <div className='card p-0 mx-3 rounded-0 bg-black text-secondary border mb-3'>
              <img src="/frontend.webp" alt="loading.." />
              <div className="card-body">
                <h4 className="card-title">Frontend Development</h4>
                <p className="card-text">Experienced in HTML, CSS, JavaScript, Bootstrap, and responsive web design.</p>
              </div>
            </div>
            {/* </Tilt> */}
          </div>

          <div className="col-md-4" data-aos="fade-up">
          {/* <Tilt options={{ max: 25, scale:1.0, speed: 300}}> */}
            <div className='card p-0 mx-3 rounded-0 bg-black text-secondary border mb-3'>
              <img src="/backend.webp" alt="loading.." />
              <div className="card-body">
                <h4 className="card-title">Backend Development</h4>
                <p className="card-text">Proficient in Node.js, Express, MongoDB, building robust server-side applications.</p>
              </div>
            </div>
            {/* </Tilt> */}
          </div>

          <div className="col-md-4" data-aos="fade-up">
          {/* <Tilt options={{ max: 25, scale:1.0, speed: 300}}> */}
            <div className='card p-0 mx-3 rounded-0 bg-black text-secondary border mb-3'>
              <img src="/website.webp" alt="loading.." />
              <div className="card-body">
                <h4 className="card-title">Website Development</h4>
                <p className="card-text">Develop dynamic, user-friendly websites with modern technologies and frameworks.</p>
              </div>
            </div>
            {/* </Tilt> */}
          </div>

          <div className="col-md-4" data-aos="fade-up">
          {/* <Tilt options={{ max: 25, scale:1.0, speed: 300}}> */}
            <div className='card p-0 mx-3 rounded-0 bg-black text-secondary border mb-3'>
              <img src="/digitalmarketing.webp" alt="loading.." />
              <div className="card-body">
                <h4 className="card-title">Digital Marketing</h4>
                <p className="card-text">Expert in content creation, social media, and brand promotion.</p>
              </div>
            </div>
            {/* </Tilt> */}
          </div>

          <div className="col-md-4" data-aos="fade-up">
          {/* <Tilt options={{ max: 25, scale:1.0, speed: 300}}> */}
            <div className='card p-0 mx-3 rounded-0 bg-black text-secondary border mb-3'>
              <img src="/SEO.webp" alt="loading.." />
              <div className="card-body">
                <h4 className="card-title">SEO</h4>
                <p className="card-text">Optimizing websites for higher rankings through keywords research and content strategies. </p>
              </div>
            </div>
            {/* </Tilt> */}
          </div>
        </div>
      </div>
    </>
  );
}
