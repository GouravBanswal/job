const PersonalDetails = () => {
    const selfInformationArray = [
        { name: "Calvin Carlo", personalinfo: "Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.", skilinfo: "Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space." }
    ]
    const selfContetnt = selfInformationArray.map((item, i) => <div key={i}>

        <p className="fs-4 fw-bold">{item.name}</p>
        <p className="text-secondary">{item.personalinfo}</p>
        <p className="text-secondary">{item.skilinfo}</p>
    </div>)
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="my-2">
                            {selfContetnt}
                        </div>
                        <PersonalSkills />
                        <PersonaExperiance />
                        <PersonalContact />
                    </div>
                    <div className="col-sm-4">
                        <PersonalInformation />

                    </div>
                </div >
            </div >


        </>
    )
}



const PersonalSkills = () => {
    const skillsArray = [
        { skils: "WordPress", percentage: "84", },
        { skils: "JavaScript", percentage: "79", },
        { skils: "HTML", percentage: "95", },
        { skils: "Figma", percentage: "85", },
        { skils: "Photoshop", percentage: "70", },
        { skils: "Illustration", percentage: "65", },
    ]
    const skillsContent = skillsArray.map((item, i) => <div key={i} className="col-sm-6">
        <div className={`d-flex justify-content-between ${skillsArray.length > 1 ? "mt-3" : ""}`}>
            <p className="text-secondary">{item.skils}</p>
            <p className="text-secondary">{item.percentage}%</p>
        </div>
        <div className="progress">
            <div className={`progress-bar `} role="progressbar" style={{ width: `${item.percentage}%` }}  ></div>
        </div>
    </div >)
    return (
        <>
            <div>
                <p className="fs-4 fw-bold">Skills :</p>
                <div className="row my-3">
                    {skillsContent}
                </div>
            </div>
        </>
    )
}


const PersonaExperiance = () => {
    const experienceArray = [
        { logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/shree-logo.png", job: "Full Stack Developer", location: "Shreethemes - India", time: "2019-22", about: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text." },
        { logo: "https://shreethemes.in/jobstack/layouts/assets/images/company/circle-logo.png", job: "Back-end Developer", location: "CircleCI - U.S.A.", time: "2017-19", about: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text." },

    ]
    const PersonalExperianceContent = experienceArray.map((item, i) => <div key={i} className="d-flex  gap-5">
        <div className="my-1">
            <img src={item.logo} height={70} alt="" />
            <p>{item.time}</p>
        </div>
        <div>
            <p className="fs-5 fw-bold">{item.job}</p>
            <p className="text-secondary fw-bold">{item.location}</p>
            <p className="text-secondary w-90">{item.about}</p>
        </div>
    </div >)
    return (
        <>
            <div>
                <p className="fs-4 fw-bold">Experience :</p>
                <div className="row my-3">
                    {PersonalExperianceContent}
                </div>
            </div>
        </>
    )
}
const PersonalContact = () => {
    return (
        <>
            <div className="card ">
                <div className="card-body">
                    <p className="fs-4 fw-bold">Contact Me :</p>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="name" className="fw-bold">Your Name:</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="email" className="fw-bold">Your Email:</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="quetions" className="fw-bold">Your Question:</label>
                            <input type="text" className="form-control" name="quetions" id="quetions" placeholder="Enter Quetions" />
                        </div>
                        <div className="mt-2">
                            <label htmlFor=" comment" className="fw-bold">Your  Comment:</label>
                            <textarea className="form-control" name=" comment" id=" comment" placeholder="Enter  Comment" />
                        </div>
                    </div>
                    <button className="btn btn-primary mt-2 w-25">Send Message</button>
                </div>
            </div >
        </>
    )
}
const PersonalInformation = () => {
    const PersonalinfoArray = [
        { email: "thomas@mail.com", dob: "31st Dec, 1996", address: "15 Razy street", city: "London", country: "UK", postalcode: "521452", mobile: "(+125) 1542-8452", socialaccount: "" }
    ]
    const PersonalinfoContent = PersonalinfoArray.map((item, i) => <div key={i}>
        <div className="d-flex justify-content-between">
            <p>email</p>
            <p>{item.email}</p>
        </div>
        <div className="d-flex justify-content-between">
            <p>dob</p>
            <p>{item.dob}</p>
        </div>
        <div className="d-flex justify-content-between">
            <p>address</p>
            <p>{item.address}</p>
        </div>
        <div className="d-flex justify-content-between">
            <p>city</p>
            <p>{item.city}</p>
        </div>
        <div className="d-flex justify-content-between">
            <p>country</p>
            <p>{item.country}</p>
        </div>
        <div className="d-flex justify-content-between">
            <p>postalcode</p>
            <p>{item.postalcode}</p>
        </div>
        <div className="d-flex justify-content-between">
            <p>mobile</p>
            <p>{item.mobile}</p>
        </div>
    </div>)
    return (
        <>
            <div className="card sticky-sm-top" style={{ backgroundColor: "rgb(248,250,252)" }}>
                <div className="card-body">
                    <p className="fw-bold fs-5">Personal Detail:</p>
                    {PersonalinfoContent}
                </div>
            </div>

        </>
    )
}





export default PersonalDetails
