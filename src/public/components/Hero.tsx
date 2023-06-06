import Navbar from './Navbar'

const Hero = () => {
    return <div className='bg-hero'>
        <div className="backdrop">
            <Navbar />
            <div className='h-100 d-flex justify-content-center align-items-center'>

                <div className='text-center '>
                    <h1 className='text-light text-center'>Find & Hire Experts for any Job</h1>
                    <p className='text-secondary w-50 my-4 mx-auto'>
                        Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.
                    </p>
                    <div className="input-group bg-light px-2 py-2">
                        <span className='input-group-text text-primary'>
                            <i className="bi bi-briefcase"></i>
                        </span>
                        <input
                            placeholder='Search Your Keywords'
                            type="text"
                            className='form-control ' />
                        <span className='input-group-text text-primary'>
                            <i className="bi bi-geo-alt-fill"></i>
                        </span>
                        <input
                            placeholder='Choose Profile'
                            type="text"
                            className='form-control ' />
                        <button className='btn btn-primary'>Search</button>
                    </div>
                    <p className='mx-auto my-3 text-center  text-light'>Popular Searches : Designer, Developer, Web, IOS, PHP Senior Engineer</p>
                </div>
            </div>
        </div>
    </div>
}

export default Hero