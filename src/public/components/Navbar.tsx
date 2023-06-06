
import { Link } from "react-router-dom"
const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://shreethemes.in/jobstack/layouts/assets/images/logo-light.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ms-auto">
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" >Home</Link>
                        <Link to="/details" className="nav-link">Jobs</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                        <Link to="/company/register" className="nav-link">Company</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar