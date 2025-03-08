import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
    return (
        <>
            <div className="container-lg bg-black text-secondary ps-5 py-5" >

                <p className='m-0 mt-5 text-white' >Contact</p>
                <h2 className='fw-bold text-warning'>GET IN TOUCH</h2>
                <div className='row py-4'>
                    <div className='col-md-5'>
                        <div className='row pb-4'>
                            <div className='col-3'>
                                <div className='square d-flex justify-content-center align-items-center'>
                                    <span className='fa fa-phone text-warning fa-2x'></span>
                                </div>
                            </div>
                            <div className='col d-flex align-items-center'>
                                <a href='tel:+919781688960'> <h6 className='text-white fw-bold'> +91 97816-88960</h6></a>
                            </div>
                        </div>

                        <div className='row pb-4'>
                            <div className='col-3'>
                                <div className='square d-flex justify-content-center align-items-center'>
                                    <span className='fa fa-envelope text-warning fa-2x'></span>
                                </div>
                            </div>
                            <div className='col d-flex align-items-center'>
                                <a href='mailto:manpreet94560@gmail.com'> <h6 className='text-white fw-bold'> manpreet94560@gmail.com</h6></a>
                            </div>
                        </div>

                        <div className='row pb-4'>
                            <div className='col-3'>
                                <div className='square d-flex justify-content-center align-items-center'>
                                    <span className='fa fa-envelope text-warning fa-2x'></span>
                                </div>
                            </div>
                            <div className='col d-flex align-items-center'>
                                <h6 className='text-white fw-bold'> VPO - Karma, Dist - Ferozepur, Punjab</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col me-3'>
                    <form className="form-group  text-light p-4 rounded">
  <input
    type="text"
    placeholder="Name"
    className="form-control bg-dark text-light border-light mb-3"
  />
  <input
    type="email"
    placeholder="Email"
    className="form-control bg-dark text-light border-light mb-3"
  />
  {/* <input type="text" placeholder="Subject" className="form-control mb-3" /> */}
  <textarea
    name="Messages"
    rows="4"
    className="form-control bg-dark text-light border-light mb-3"
    placeholder="Messages"
  ></textarea>
  <button type="submit" className="btn btn-outline-light">
    Submit
  </button>
</form>

                    </div>
                </div>

            </div>
        </>
    )
}
