const JobDetails = () => {
    const cardArray = [
        { icon: "bi bi-person-fill", type: "Employee Type:", category: "Full Time" },
        { icon: "bi bi-person-fill", type: "Location:", category: "Full Time  " },
        { icon: "bi bi-person-fill", type: "Experience:", category: "Full Time  " },
        { icon: "bi bi-person-fill", type: "Qualifications:", category: "Full Time  " },
        { icon: "bi bi-person-fill", type: "Salary:", category: "Full Time  " },
        { icon: "bi bi-person-fill", type: "Date posted:", category: "Full Time  " },
    ]
    const carContent = cardArray.map((item, i) => <div key={i} className="col-sm-4 ">
        <div className="card ">
            <div className="card-body d-flex gap-2  align-items-center">
                <span>
                    <i className={`${item.icon}`}></i>
                </span>
                <div className="">
                    <p>{item.type}</p>
                    <p className="text-success">{item.category}</p>
                </div>
            </div>
        </div>
    </div >)
    const jobDescriptionArray = [
        { desc: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized." },
        { desc: "This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces." },
        { desc: "It sometimes makes sense to select texts containing the various letters and symbols specific to the output language." }
    ]

    const jobDescriptionContent = jobDescriptionArray.map((item, i) => <div key={i} className="">
        <p className="text-secondary">{item.desc}</p>
    </div>)

    const ResponsbilityArray = [
        { icon: "bi bi-arrow-right", res: "Participate in requirements analysis" },
        { icon: "bi bi-arrow-right", res: "Write clean, scalable code using C# and .NET frameworks" },
        { icon: "bi bi-arrow-right", res: "Test and deploy applications and systems" }
    ]

    const jobResponsbilityContent = ResponsbilityArray.map((item, i) => <div key={i} className="d-flex gap-2">
        <span><i className={`${item.icon}`}></i></span>
        <p className="text-secondary">{item.res}</p>
    </div>)

    const companyArray = [
        { logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/facebook-logo.png", time: "full time", job: "Web Designer / Developer", location: " Australia", apply: "21 applied of 40 vacancy" },
        { logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/google-logo.png", time: "part time", job: "Marketing Director", location: "  USA", apply: "21 applied of 40 vacancy" },
        { logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/android.png", time: "full time", job: "Marketing Director", location: "  China", apply: "21 applied of 40 vacancy" }
    ]
    const companyContent = companyArray.map((item, i) => <div key={i} className="col-sm-4">
        <div className="card ">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center ">
                    <img src={item.logo} height={40} alt="" />
                    <div className={`badge ${item.time === "full time" ? 'bg-success' : 'bg-warning'}`}>
                        {item.time}
                    </div>
                </div>
                <div className="mt-2">{item.job}</div>
                <div className="mt-2">{item.location}</div>
                <div className="mt-2">{item.apply}</div>
            </div>
        </div>
    </div>)

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card sticky-top">
                        <div className="card-body">
                            <div className="p-3">
                                <img height={75} className="img-fuid" src="https://shreethemes.in/jobstack/layouts/assets/images/company/lenovo-logo.png" alt="" />
                                <p className="mt-4 fs-5 fw-bold">Back-End Developer</p>
                                <span className="mx-2 text-secondary"><i className="bi bi-building"></i>Lenovo pvt. ltd.</span>
                                <span className="mx-2 text-secondary"><i className="bi bi-geo-alt-fill"></i>Beijing, China</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="row">
                        <p className="fs-5 fw-bold">Job Information:</p>
                        {carContent}
                    </div>
                    <div className="mt-4">
                        <p className="fs-5 fw-bold">Job Description:</p>
                        {jobDescriptionContent}
                    </div>
                    <div className="mt-4">
                        <p className="fs-5  fw-bold">Responsibilities and Duties:</p>
                        {jobResponsbilityContent}
                    </div>
                    <button className="btn btn-success">Apply Now</button>
                </div>
            </div>

            <div className="text-center mt-5">
                <p className="fs-2 fw-bold">Related Vacancies</p>
                <p className="text-secondary">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div className="row">
                {companyContent}
            </div>
            <div className="card card-hover mt-4">
                <div className="card-body d-flex justify-content-between">
                    <div className="w-75">
                        <p>Explore a job now!</p>
                        <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
                        </p>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <button className="btn btn-primary">Apply Now</button>
                        <button className="btn btn-outline-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JobDetails