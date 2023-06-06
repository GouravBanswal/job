import Navbar from "../components/Navbar"
import "./../assets/css/style.css"
const JobVaccuncies = () => {
    const JOBS = [
        {
            id: 1,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/facebook-logo.png",
            position: "Web Developer",
            type: "Full Time",
            date: "9th May 2023",
            city: "pune",
            range: "25000-45000",
            company: "Facebook",
        },
        {
            id: 2,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/google-logo.png",
            position: "React Developer",
            type: "Part Time",
            date: "20th May 2023",
            city: "Mumbai",
            range: "15000-35000",
            company: "Google"
        },
        {
            id: 3,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/android.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 3,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/google-logo.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/facebook-logo.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/android.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/facebook-logo.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/google-logo.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/facebook-logo.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/android.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/google-logo.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
        {
            id: 4,
            logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/facebook-logo.png",
            position: "MERN STACK Developer",
            type: "Full Time",
            date: "1th May 2023",
            city: "Delhi",
            range: "45000-75000",
            company: "Android"
        },
    ]

    const CONTENT = JOBS.map(item => <div className="col-sm-3">
        <div className="card card-hover my-3" key={item.id}>
            <div className="card-body ">
                <div>
                    <p>{item.position}</p>
                    <p>{item.date}</p>
                    <div className=" d-flex gap-3">
                        <p>{item.type}</p>
                        <p>{item.range}</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className="d-flex gap-3">
                <img src={item.logo} className="img-fluid" style={{ height: "50px", padding: "5px" }} alt="" />
                <div>
                    <p>{item.company}</p>
                    <p>{item.city}</p>
                </div>
            </div>
        </div>
    </div>
    )
    return <div className="mb-5">

        <div className=" job-hero">
            <div className="job-backdrop ">

                <Navbar />
                <p className="job-middle fs-1 text-light">Job Vacancies</p>
                <div className="input-group bg-light px-2 py-3 align-items-center job-search">
                    <span className="input-group-text"><i className="bi bi-briefcase "></i></span>
                    <input type="text" placeholder="Search Your Keywords" className="form-control" />
                    <span className="input-group-text"><i className="bi bi-geo-alt-fill"></i></span>
                    <input type="text" placeholder="Choose Profile" className="form-control" />
                    <span className="input-group-text"><i className="bi bi-briefcase"></i></span>
                    <input type="text" placeholder="Full Time" className="form-control" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

        </div>
        <div className="mt-5 container">
            <div className="row">
                {CONTENT}
            </div>
        </div>

        <div className="container ">
            <div className="text-center my-5">
                <p className="fw-bold fs-3">Here's why you'll love it Jobstack</p>
                <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.`</p>
            </div>

            <div className="my-5">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <button className="btn btn-outline-success btn-lg"><i className="bi bi-telephone fs-3"></i></button>
                                    <p className="fw-bold fs-5">24/7 Support</p>
                                    <p>Many desktop publishing now use and a search for job.</p>
                                    <a href="" className="text-decoration-none text-dark">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <button className="btn btn-outline-success btn-lg"><i className="bi bi-people fs-3"></i></button>
                                    <p className="fw-bold fs-5">24/7 Support</p>
                                    <p>Many desktop publishing now use and a search for job.</p>
                                    <a href="" className="text-decoration-none text-dark">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <button className="btn btn-outline-success btn-lg"><i className="bi bi-hourglass-split fs-3"></i></button>
                                    <p className="fw-bold fs-5">24/7 Support</p>
                                    <p>Many desktop publishing now use and a search for job.</p>
                                    <a href="" className="text-decoration-none text-dark">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <button className="btn btn-outline-success btn-lg"><i className="bi bi-android2 fs-3"></i></button>
                                    <p className="fw-bold fs-5">24/7 Support</p>
                                    <p>Many desktop publishing now use and a search for job.</p>
                                    <a href="" className="text-decoration-none text-dark">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card card-hover">
                    <div className="card-body">
                        <p className="fw-bold fs-5">Explore a job now!
                        </p>
                        <div className="d-flex justify-content-between">
                            <div className="w-50">
                                <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                            </div>
                            <div className="d-flex gap-3 align-items-center">
                                <button className="btn btn-success">Apply Now</button>
                                <button className="btn  btn-outline-success">Learn More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default JobVaccuncies