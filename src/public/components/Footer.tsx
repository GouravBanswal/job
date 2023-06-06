import React from 'react'

const Footer = () => {
    return <div className='bg-primary py-5'>
        <div className="container">
            <div className='d-flex justify-content-between'>
                <img src="https://shreethemes.in/jobstack/layouts/assets/images/logo-light.png" alt="" />
                <div className='d-flex gap-3'>
                    <a href='#' className='text-decoration-none text-light'>Home </a>
                    <a href='#' className='text-decoration-none text-light'>How it works  </a>
                    <a href='#' className='text-decoration-none text-light'>Create a job  </a>
                    <a href='#' className='text-decoration-none text-light'>About us  </a>
                    <a href='#' className='text-decoration-none text-light'>Contact us </a>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between '>
                <div className='text-light'>© 2023 SKILLHUB. Design with <span className='text-danger'>♥</span> by SKILLHUB.</div>
                <div className='text-light d-flex gap-3'>
                    <i className="bi bi-google"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-linkedin"></i>
                </div>
            </div>
        </div>
    </div>
}

export default Footer