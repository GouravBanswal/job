import React from 'react'

const Stat = () => {
    return <div className='container'>
        <div className='d-flex position-relative'>
            <img
                className='w-50 d-inline-block'
                src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab05.jpg" alt="" />
            <div className='bg-primary w-50 px-5 d-flex flex-column justify-content-center'>
                <p className='fs-1 text-light'>Get the job of your dreams quickly.</p>
                <p className='sub-text'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                <p className='sub-text'>
                    <i className="bi bi-heart text-light"></i>
                    Digital Marketing Solutions for Tomorrow
                </p>
                <p className='sub-text'>
                    <i className="bi bi-heart text-light"></i>
                    Our Talented & Experienced Marketing Agency
                </p>
                <p className='sub-text'>
                    <i className="bi bi-heart text-light"></i>
                    Create your own skin to match your brand
                </p>
            </div>
            <button
                className='btn btn-lg btn-light rounded-pill position-absolute top-50 start-50 translate-middle'>
                <i className='bi bi-play fs-1 text-primary'></i>
            </button>
        </div>

        <div className='bg-light d-flex justify-content-between px-5 pt-5'>
            <div>
                <p className='fw-bold fs-1 text-center'>1548K+</p>
                <p className='text-secondary'>JOB FULFILLMENT</p>
            </div>
            <div >
                <p className='fw-bold fs-1 text-center'>25+</p>
                <p className='text-secondary'>BRANCHES</p>
            </div>
            <div >
                <p className='fw-bold fs-1 text-center'>9+</p>
                <p className='text-secondary'>YEARS EXPERIENCE</p>
            </div>
        </div>
    </div>
}

export default Stat