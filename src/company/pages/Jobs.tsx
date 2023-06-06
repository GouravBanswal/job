import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { createJobPost, getJobPosts } from '../../redux/actions/companyActions'

const Jobs = () => {
    const dispatch = useAppDispatch()
    const { loading, error, jobAdded } = useAppSelector(state => state.company)
    const { info } = useAppSelector(state => state.public)
    const handleAddJob = () => {
        if (info) {
            dispatch(createJobPost({
                city: "pune",
                desc: "Full stack Developer",
                experience: "0-1 Year",
                salary: 20000,
                title: "jr. Developer",
                companyId: info.id,
                companyName: info.name
            }))
        }

    }

    useEffect(() => {
        dispatch(getJobPosts())

    }, [])


    if (loading) return <div className="spinner spinner-border"></div>

    return <>
        <div className="container my-5">
            <div className='text-end'>
                <button
                    data-bs-toggle="modal"
                    data-bs-target="#addJob"
                    type="button"
                    className="btn btn-primary">Add job</button>
            </div>

        </div>


        {/* add job modal start*/}

        <div className="modal fade" id="addJob" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addJob">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className='form-control' placeholder='Enter Job title' />
                        <br />
                        <textarea className='form-control' placeholder='Enter Job Description' ></textarea>
                        <br />
                        <input type="text" className='form-control' placeholder='Enter Salary Range' />
                        <br />
                        <input type="text" className='form-control' placeholder='Enter Experince' />
                        <br />
                        <input type="text" className='form-control' placeholder='Enter City' />
                        <br />
                        <button onClick={handleAddJob} data-bs-dismiss="modal" type="button" className="btn btn-primary me-3">Add Job Post</button>
                        <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary"> Reset</button>
                    </div>

                </div>
            </div>
        </div>
        {/* add job modal end */}

    </>
}

export default Jobs