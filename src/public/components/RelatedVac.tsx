
const RelatedVac = () => {
    return <>
        <div className="container">
            <div className="container">
                <div className="d-flex flex-column py-5  text-center ">
                    <p className="fs-2 " ><strong>Related Vacancies</strong> </p>
                    <p className="w-50 text-center mx-auto text-secondary">Search all the open positions on the web.
                        Get your own personalized salary estimate.
                        Read reviews on over 30000+ companies worldwide.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body position-relative">
                            <div className="position-absolute relatedIcon  ">
                                <img height={40} src="https://shreethemes.in/jobstack/layouts/assets/images/company/circle-logo.png" alt="" />
                            </div>
                            <br /><br />
                            <span className="fs-3">Circle CI</span>
                            <p className="text-secondary">Digital Marketing Solutions for Tomorrow</p>
                            <hr />
                            <div className="d-flex justify-content-between fw-bold">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-geo-alt"></i>
                                    <p> India</p>
                                </div>

                                <p className="text-success"> 6 Jobs</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body position-relative">
                            <div className="position-absolute relatedIcon  ">
                                <img height={40} src="https://shreethemes.in/jobstack/layouts/assets/images/company/telegram.png" alt="" />
                            </div>
                            <br /><br />
                            <span className="fs-3">Telegram</span>
                            <p className="text-secondary">Digital Marketing Solutions for Tomorrow</p>

                            <hr />
                            <div className="d-flex justify-content-between fw-bold">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-geo-alt"></i>
                                    <p> India</p>
                                </div>

                                <p className="text-success"> 6 Jobs</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body position-relative">
                            <div className="position-absolute relatedIcon  ">
                                <img height={40} src="https://shreethemes.in/jobstack/layouts/assets/images/company/whatsapp.png" alt="" />
                            </div>
                            <br /><br />
                            <span className="fs-3">WhatsApp</span>
                            <p className="text-secondary">Digital Marketing Solutions for Tomorrow</p>
                            <hr />
                            <div className="d-flex justify-content-between fw-bold">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-geo-alt"></i>
                                    <p> Pune</p>
                                </div>

                                <p className="text-success"> 6 Jobs</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body position-relative">
                            <div className="position-absolute relatedIcon  ">
                                <img height={40} src="https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png" alt="" />
                            </div>
                            <br /><br />
                            <span className="fs-3">Spotify</span>
                            <p className="text-secondary">Digital Marketing Solutions for Tomorrow</p>
                            <hr />
                            <div className="d-flex justify-content-between fw-bold">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-geo-alt"></i>
                                    <p> Delhi</p>
                                </div>

                                <p className="text-success"> 4 Jobs</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="container ">

            <div className=" explor p-3 m-5 d-flex">

                <div className="w-75">
                    <p className="fs-3">Explore a job now!</p>
                    <p className="w-50 text-secondary">Search all the open positions on the web.
                        Get your own personalized salary estimate.
                        Read reviews on over 30000+ companies worldwide.</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-success">Apply Now</button>
                    <button className="btn btn-outline-success">Learn More</button>
                </div>
            </div>
        </div>
    </>
}

export default RelatedVac