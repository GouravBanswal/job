import { useEffect } from "react"
import "../assets/css/style.css"
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { registerCompany } from '../../redux/actions/publicActions'
import { useNavigate } from "react-router-dom"
const Register = () => {
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const { loading, error, companyReigistered } = useAppSelector(state => state.public)
    const handleRegister = () => {

        dispatch(registerCompany({
            email: "google@gmail.com",
            name: "Google",
            password: "123"
        }))
    }
    useEffect(() => {
        if (companyReigistered) {
            navigate("/login")
        }
    }, [companyReigistered])


    if (loading) {
        return <div className="spinner spinner-border"></div>
    }

    return <div className='register-hero'>
        <div className='backdrop-new'>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-5">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="card">
                            <div className='text-center'>
                                <img src="https://shreethemes.in/jobstack/layouts/assets/images/logo-dark.png" width={200} alt="" />
                            </div>
                            <div className="card-body mx-4">
                                <h2 className='mt-1'>Register</h2>
                                <div className='mt-3'>
                                    <label htmlFor="name" className="form-label">Your name</label>
                                    <input
                                        type="text"
                                        className="form-control py-3 mt-3"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="text"
                                        className="form-control py-3 mt-3"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="text"
                                        className="form-control py-3 mt-3"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a password.</div>
                                </div>
                                <p className="text-center mt-2">
                                    <input type="checkbox" width={600} />
                                    I Accept Terms And Condition
                                </p>
                                <button onClick={handleRegister} type="button" className="btn btn-success w-100">
                                    Register
                                </button>
                                <p className="text-center mt-2">
                                    Already Have Account? <a href="#">Singn in </a>
                                </p>
                                <p className="text-center mt-1">
                                    © 2023 Jobstack. Designed by
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Register