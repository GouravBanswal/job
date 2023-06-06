import React from 'react'

const Services = () => {
    const list = [
        { image: "https://shreethemes.in/jobstack/layouts/assets/images/work/01.jpg", caption: "NextJs" },
        { image: "https://shreethemes.in/jobstack/layouts/assets/images/work/02.jpg", caption: "Full Stack Development" },
        { image: "https://shreethemes.in/jobstack/layouts/assets/images/work/03.jpg", caption: "Web Development" },
        { image: "https://shreethemes.in/jobstack/layouts/assets/images/work/04.jpg", caption: "React Development" },
        { image: "https://shreethemes.in/jobstack/layouts/assets/images/work/05.jpg", caption: "Angular Development" },
        { image: "https://shreethemes.in/jobstack/layouts/assets/images/work/06.jpg", caption: "MERN STACK" },
    ]
    const content = <>
        <div className='my-4'>
            <p className='fs-1'>Trending Services</p>
            <p className='w-50 text-secondary'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>
        <div className={`carousel-item active d-flex gap-3`}>
            {list.map((item) => {
                return <div className="card w-25 position-relative">
                    <img src={item.image} className='img-fluid' alt="" />
                    <div
                        className='position-absolute w-100 top-0 h-100 d-flex align-items-end justify-content-center '
                        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>

                        <p className='fs-6 text-light'>{item.caption}</p>

                    </div>
                </div>
            })}
        </div>
    </>
    return <div className="container">

        <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
                {content}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}

export default Services