
const CandidateProfile = () => {
    return <>
        <div className="container mt-3">
            <div className="position-relative">
                <img height={300} width={"100%"} className='rounded-5 ' src="https://shreethemes.in/jobstack/layouts/assets/images/hero/bg5.jpg" alt="" />
            <div className='position-absolute top-50'>
                <img height={150} className='rounded-pill  ' style={{ marginLeft: 25 ,marginTop:"40px", border:"8px solid white" }} src="https://shreethemes.in/jobstack/layouts/assets/images/team/01.jpg" alt="" />
            </div>
                <div style={{marginLeft:200}} >
                    <div className="fw-semibold fs-5">Mr. Calvin carlo</div>
                    <div className="text-secondary">Web Designer</div>
                </div>
            </div>
        </div>

    </>
}
export default CandidateProfile