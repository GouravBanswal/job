import React from 'react'
import { } from "./../assets/css/style.css"

const ThankYou = () => {
  return (


    <div className='thankyou'>
      <div className="title-heading text-center my-auto">
        {/* <div className="w-24 h-24 bg-emerald-600/5 text-emerald-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto"> */}
        <div className="thankyou-thums  d-flex justify-content-center align-items-center align-middle shadow-sm shadow-lg mx-auto">
          <i className="bi bi-hand-thumbs-up thankyouicon"></i>
        </div>
        <h1 className='mt-4 text-3xl font-bold '>Thank You</h1>
        <p className='text-slate-400 max-w-xl mx-auto mt-4 text-muted'>We are a huge marketplace dedicated to connecting great artists of all Jobstack with their fans and unique token collectors!</p>
        <div className="mt-6">
          <button className='thanyou-btn btn btn-outline'>
            <a href='/' className='btn'> Back to Home</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThankYou