import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const CompanyLayout = () => {
    return <>
        <Navbar />
        <Outlet />
    </>
}

export default CompanyLayout