
const SecondPage = () => {
    return <div className="container pt-5">
        <div className="row">
            <div className="col-sm-8">
                <p className="fs-3">Company Story</p>
                <p className="text-secondary">It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it
                    has a more-or-less normal distribution of letters, as opposed.
                </p>
                <p className="text-secondary">Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor a
                    t Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                </p>
                <img className="img-fluid rounded-2" src="https://shreethemes.in/jobstack/layouts/assets/images/company/1.jpg" alt="" />
                <div className="row pt-4 ">
                    <div className="col-sm-6">
                        <img className="img-fluid  rounded-2" src="https://shreethemes.in/jobstack/layouts/assets/images/company/2.jpg" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <img className="img-fluid  rounded-2" src="https://shreethemes.in/jobstack/layouts/assets/images/company/3.jpg" alt="" />
                    </div>
                    <div className="py-3">
                        <p className="fs-3">Vacancies:</p>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="fw-bold fs-5">Web Developer</p>
                                <div className="d-flex">
                                    <i className="bi bi-clock fw-bold"></i>
                                    <p className="text-secondary px-2">   Posted 1 Days ago</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="badge text-light bg-success"> Part Time</p>
                                    <p className="text-secondary "> $650 - $300/mo</p>

                                </div>
                                <hr />
                                <div className="d-flex pt-2">
                                    <img height={50} className="secondPageIcon rounded-2 p-2" src="https://shreethemes.in/jobstack/layouts/assets/images/company/skype.png" alt="" />
                                    <div className="px-3">
                                        <span className=" fs-5"> Skype</span>
                                        <p className="text-secondary"> India</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="fw-bold fs-5">Software Engineering</p>
                                <div className="d-flex">
                                    <i className="bi bi-clock fw-bold"></i>
                                    <p className="text-secondary px-2">   Posted 3 Days ago</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="badge text-light bg-success"> Full Time</p>
                                    <p className="text-secondary "> $950 - $1100/mo</p>

                                </div>
                                <hr />
                                <div className="d-flex pt-2">
                                    <img height={50} className="secondPageIcon rounded-2 p-2" src="https://shreethemes.in/jobstack/layouts/assets/images/company/skype.png" alt="" />
                                    <div className="px-3">
                                        <span className=" fs-5"> Skype</span>
                                        <p className="text-secondary"> India</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card mt-5">
                    <div className="card-body">
                        <p className="fs-3">  Leave A Comment:</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="fs-5">Your Name:</p>
                                <div className="input-group alert alert-secondary">
                                    <i className="bi bi-person fs-4 px-2"></i>
                                    <input type="text" className="form-control " placeholder="Enter your Name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <p className="fs-5"> Your Email:</p>
                                <div className="input-group alert alert-secondary">
                                    <i className="bi bi-envelope-at fs-4 px-2"></i>
                                    <input type="text" className="form-control " placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <p className="fs-5"> Your Comment:</p>
                                <div className="input-group alert alert-secondary">
                                    <i className="bi bi-chat-heart fs-4 px-2"></i>
                                    <textarea className="form-control " placeholder="Enter your email"></textarea>
                                </div>
                                <button className="w-100 btn btn-success fw-bold mt-4">Send Message</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-sm-4 ">
                <div className="card p-2 mapCard sticky">
                    <div className="card-body">
                        <img className="w-100 rounded-2" src="https://www.thehotelguru.com/static-maps/locations/11493.png" alt="" />
                        <div className="d-flex justify-content-between ">

                            <div className="text-secondary fw-bold pt-3 ">
                                <p>  Founded:</p>
                                <p>  Founder:</p>
                                <p>   Headquarters:</p>
                                <p>  employees:</p>
                                <p>   Website:</p>
                            </div>

                            <div className="text-dark pt-3 text-end">
                                <p>  2003</p>
                                <p>  Skillhub </p>
                                <p>  Sambhajinagar</p>
                                <p>  788</p>
                                <p> https://Skillhub.com</p>
                            </div>
                        </div>
                        <hr />
                        <p className="fs-4"> Contact us</p>
                        <span className="fs-5  ">Your Name:</span>
                        <input type="text" className="form-control my-2 " placeholder=" Name :" />
                        <span className="fs-5  "> Your Email:</span>
                        <input type="text" className="form-control my-2" placeholder="  Email :" />
                        <span className="fs-5  "> Your Question:</span>
                        <input type="text" className="form-control my-2" placeholder=" Subject :" />
                        <span className="fs-5  "> Your Comment:</span>
                        <textarea className="form-control my-2" placeholder=" message :" />
                        <button className="btn fw-bold btn-success">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SecondPage