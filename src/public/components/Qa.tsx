import React from 'react'

const Qa = () => {
    return <div className="container" style={{ marginTop: "55vh" }}>
        <div className='text-center'>
            <p className='fs-1'>Questions & Answers</p>
            <p className='text-secondary'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>

        <div className="row">
            {
                [...Array(4).keys()].map((itme, i) => <div className="col-sm-6 mt-5" key={i}>
                    <div className='d-flex gap-2'>
                        <span> <i className="bi bi-heart"></i> </span>
                        <div>
                            <p className='fw-bold'>How our Jobstack work ?</p>
                            <p className='sub-text'>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>
                </div>)
            }

        </div>

        <div className="card card-hover mb-5">
            <div className="card-body d-flex justify-content-between">
                <div className='w-75'>
                    <p>Explore a job now!</p>
                    <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
                <div className='d-flex  gap-3 align-items-center'>
                    <button className='btn btn-primary'>Apply Now</button>
                    <button className='btn btn-outline-primary'>Read More</button>
                </div>
            </div>
        </div>

    </div>
}

export default Qa