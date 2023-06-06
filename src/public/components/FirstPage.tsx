
const FirstPage = () => {
    return <>
        <div className="position-relative imgFirst mb-5">
            <div className="position-absolute imgColor ">
                <div className="titleBottom container ">

                    <div className="d-flex  py-3 px-3 justify-content-between align-items-center">

                        <div className="d-flex">
                            <img height={80} className="mx-3 logo p-2 rounded-3 " src="https://shreethemes.in/jobstack/layouts/assets/images/company/skype.png" alt="" />
                            <div className="" >
                                <span className="fs-2 fw-bold">Skype</span>
                                <div className="d-flex">
                                    <i className="bi bi-geo-alt text-secondary"></i>
                                    <p className="text-secondary mx-2">Sambhajinagar, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex   gap-2">
                            <button className="btn btn-success">Follow</button>
                            <button className="btn btn-outline-success">See Job</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FirstPage