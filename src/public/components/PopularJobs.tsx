import React from 'react'

const PopularJobs = () => {
    const JOBS = [
        {
            id: 1,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/facebook-logo.png",
            position: "Web Developer",
            type: "Full Time",
            date: "9th May 2023",
            city: "Pune",
            range: "25000-45000"
        },
        {
            id: 2,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/google-logo.png",
            position: "React Developer",
            type: "Part Time",
            date: "5th May 2023",
            city: "Mumbai",
            range: "15000-35000"
        },
        {
            id: 3,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/lenovo-logo.png",
            position: "MERN Stack Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000"
        },
    ]
    const CONTENT = JOBS.map(item => <div className="card card-hover my-4" key={item.id}>
        <div className="card-body d-flex justify-content-between align-items-center">
            <div className='d-flex gap-4 align-items-center w-25'>
                <img src={item.logo} style={{ height: "50px" }} alt="" />
                <p>{item.position}</p>
            </div>
            <div>
                <div
                    className={`badge ${item.type === "Full Time" ? 'bg-success' : "bg-warning"}`}>
                    {item.type}
                </div>
                <div>{item.date}</div>
            </div>
            <div>
                <div>{item.city}</div>
                <div><strong> {item.range} </strong></div>
            </div>
            <div className='d-flex gap-4 align-items-center'>
                <i className='bi bi-heart text-primary'></i>
                <button className='btn btn-primary'>Apply Now</button>
            </div>
        </div>
    </div>)
    return <div className='my-5 container'>
        <p className='fs-1 text-center'>Popular Jobs</p>
        <p className='w-50 text-center mx-auto text-secondary'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        {CONTENT}
        <p className=' text-center'>
            <a href="" className='text-secondary text-decoration-none'>
                Show More Jobs <i className="bi bi-arrow-right"></i>
            </a>
        </p>
    </div>
}

export default PopularJobs