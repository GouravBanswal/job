import React from 'react'
import ab03 from "../assets/images/ab05.jpg"
const BestCompnay = () => {
    return <div className='container my-5'>
        <div className='d-flex'>

            <div className='w-50'>
                <div>
                    <p>Find Best Companies.</p>
                    <p>earch all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img src="" alt="" />
                                <div>
                                    <p>Lenovo</p>
                                    <p>5 Vacancy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* left column end */}

            <div className='position-relative w-50'>
                <img
                    className='img-fluid position-absolute top-0 start-25 w-75 ' src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab03.jpg"
                    alt="" />
                <img
                    className='img-fluid position-absolute top-100  w-50 border-5 border-light border'
                    src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab04.jpg"
                    alt="" />
                <button
                    className='btn btn-lg btn-light rounded-pill position-absolute top-50 start-25 translate-middle'>
                    <i className='bi bi-play fs-1 text-primary'></i>
                </button>
            </div>
            {/* right column end */}
        </div>
    </div>
}

export default BestCompnay