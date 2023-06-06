import { Link } from "react-router-dom"
const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Compnay </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/employer" className="nav-link active" >Account</Link>
                    <Link to="/employer/jobs" className="nav-link" >Jobs</Link>
                    <Link to="/employer/settings" className="nav-link" >Settings</Link>
                    <Link to="/" className="nav-link" >Website</Link>
                    <button type="button" className="btn btn-outline-light">Logout</button>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar