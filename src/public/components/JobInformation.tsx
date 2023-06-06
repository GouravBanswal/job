
const JobInformation = () => {
    const jobInfo1 = [
        {
            icon: "bi bi-person-workspace",
            title: "Employee Type",
            desc: "Full Time"
        },
        {
            icon: "bi bi-geo-alt",
            title: "Location",
            desc: "Beijing, China"
        },
        {
            icon: "bi bi-code",
            title: "Job Type",
            desc: "Back-end Developer"
        },
    ]
    const jobInfo2 = [
        {
            icon: "bi bi-person-workspace",
            title: "Experience",
            desc: "2+ years"
        },
        {
            icon: "bi bi-book",
            title: "Qualifications:",
            desc: "MCA"
        },
        {
            icon: "bi bi-currency-dollar",
            title: "Salary:",
            desc: "$4000 - $4500"
        },
        {
            icon: "bi bi-clock",
            title: "Date posted:",
            desc: "28th Feb, 2023"
        },
    ]
    const jobInfo1Content = jobInfo1.map(item => <>
        <div className="col-sm-4">
            <div className=" card-hover">
                <div className=" d-flex gap-4 align-items-center">
                    <i className={`${item.icon} fs-4`}></i>
                    <div className="">
                        <p className="fw-semibold">{item.title}</p>
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>

    </>)
    const jobInfo2Content = jobInfo2.map(item => <>
        <div className="col-sm-3">
            <div className="card card-hover">
                <div className=" d-flex gap-4 align-items-center px-2">
                    <i className={`${item.icon} fs-4`} ></i>
                    <div className="">
                        <p className="fw-semibold">{item.title}</p>
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>

    </>)
    const responsibilitisAndDuties = [
        { desc: "Participate in requirements analysis" },
        { desc: "Write clean, scalable code using C# and .NET frameworks" },
        { desc: "Test and deploy applications and systems" },
        { desc: "Revise, update, refactor and debug code" },
        { desc: "Improve existing software" },
        { desc: "Develop documentation throughout the software development life cycle (SDLC)" },
        { desc: "Serve as an expert on applications and provide technical support" }

    ]
    const responsibilitisAndDutiesContent = responsibilitisAndDuties.map(item => <div className='d-flex gap-3'>
        <span><i className='bi bi-arrow-right'></i></span>
        <p>{item.desc}</p>
    </div>
    )
    const SkillsAndQualities = [
        { desc: "Proven experience as a .NET Developer or Application Developer" },
        { desc: "good understanding of SQL and Relational Databases, specifically Microsoft SQL Server." },
        { desc: "Experience designing, developing and creating RESTful web services and APIs" },
        { desc: "Basic know how of Agile process and practices" },
        { desc: "Good understanding of object-oriented programming." },
        { desc: "Good understanding of concurrent programming." },
        { desc: "Sound knowledge of application architecture and design." },
        { desc: "Excellent problem solving and analytical skills" }

    ]
    const SkillsAndQualitiesContent = SkillsAndQualities.map(item => <div className='d-flex gap-3'>
        <span><i className='bi bi-arrow-right'></i></span>
        <p>{item.desc}
        </p>
    </div>)

    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card sticky-top">
                        <div className="card-body">
                            <img src="https://shreethemes.in/jobstack/layouts/assets/images/company/lenovo-logo.png" alt="" />
                            <p className='fs-4 fw-semibold'>Back-End Developer</p>
                            <div className='d-flex gap-2'>
                                <div className='d-flex gap-2'>
                                    <i className='bi bi-building'></i>
                                    <p>Lenovo pvt. ltd.</p>
                                </div>
                                <div className='d-flex gap-2'>
                                    <i className='bi bi-geo-alt'></i>
                                    <p>Beijing, China</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <p> <strong>Job Information:</strong></p>
                    <div className="row">
                        <div className="card  card-hover" style={{width:830,marginLeft:"14px"}}>
                            <div className=" card-body">
                                <div className="d-flex gap-2">
                                    {jobInfo1Content}
                                </div>

                            </div>

                        </div>
                        <div className="row my-2">
                            {jobInfo2Content}
                        </div>
                    </div>

                    <div>
                        <p><strong>Job Description</strong></p>
                        <p className='text-secondary'>
                            One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.
                            <br />    <br />
                            This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.
                            <br />    <br />
                            It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.
                        </p>
                    </div>
                    {/* Responsibilities and Duties */}
                    <div className='text-secondary ' >
                        <p className='text-dark'><strong>Responsibilities and Duties:</strong></p>
                        <p>It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        <div>
                            {responsibilitisAndDutiesContent}

                        </div>

                    </div>
                    {/* Required Experience, Skills and Qualifications: */}
                    <div className='text-secondary ' >
                        <p className='text-dark'><strong>Required Experience, Skills and Qualifications:</strong></p>
                        <p>It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        <div>

                            {SkillsAndQualitiesContent}

                        </div>

                    </div>
                    <button className='btn btn-success'>Apply Now</button>

                </div>
            </div>
        </div >
    </>
}

export default JobInformation