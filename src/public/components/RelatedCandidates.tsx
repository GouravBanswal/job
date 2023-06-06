import Footer from "./Footer"

const RelatedCandidates = () => {
    const candidates = [
        {
            profile: "https://shreethemes.in/jobstack/layouts/assets/images/team/01.jpg",
            name: "Steven Townsend",
        },
        {
            profile: "https://shreethemes.in/jobstack/layouts/assets/images/team/02.jpg",
            name: "Tiffany Betancourt",
        },
        {
            profile: "https://shreethemes.in/jobstack/layouts/assets/images/team/03.jpg",
            name: "Jacqueline Burns",
        },
        {
            profile: "https://shreethemes.in/jobstack/layouts/assets/images/team/04.jpg",
            name: "Mari Harrington",
        },
    ]
    const candidatesContent = candidates.map(item => <>
        <div className="col-sm-3">
            <div className="card pt-4 ">
                <div className="text-center">
                    <img className="img-fluid rounded-circle " height={100} width={100} src={item.profile} alt="" />
                </div>
                <div className="text-center fw-bold">{item.name}</div>
                <div className="text-center text-secondary">Web Designer</div>
                <div className="d-flex rounded-5 justify-content-center gap-2 py-2">
                    <div className="badge bg-success-subtle text-success">Design</div>
                    <div className="badge bg-success-subtle text-success">UI</div>
                    <div className="badge bg-success-subtle text-success">Digital</div>
                </div>
                <div className="d-flex justify-content-center gap-4 text-center py-1">
                    <div >
                        <div className="text-secondary">Salary:</div>
                        <div className="fw-bold ">$4k - $4.5k</div>
                    </div>
                    <div >
                        <div className="text-secondary">Experience:</div>
                        <div className="fw-bold ">2 Years</div>
                    </div>
                </div>
                <div className="text-center py-2">
                    <button className="btn btn-primary ">Profile</button>
                    <button className="btn btn-outline-primary rounded-circle ms-2"><i className="bi bi-chat"></i></button>
                </div>
            </div>
        </div>

    </>)

    return <>
        <div className="container">
            <div className='my-5 text-center '>
                <p className='fs-1 '>Related Candidates</p>
                <p className='text-secondary w-50 mx-auto'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div className="row">
                {candidatesContent}
            </div>
            <div className="card card-hover mt-4 mb-5">
                <div className="card-body d-flex align-items-center justify-content-between">
                    <div className="w-75">
                        <p className="fw-semibold fs-4">Explore a job now!</p>
                        <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <button className="btn btn-primary">Apply Now</button>
                        <button className="btn btn-outline-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default RelatedCandidates