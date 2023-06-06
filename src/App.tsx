import CandidateDetails from "./public/pages/CandidateDetails"
import Details from "./public/pages/Details"
import EmployeeDetails from "./public/pages/EmployeeDetails"
import Home from "./public/pages/Home"
import JobDetails from "./public/pages/JobDetails"
import JobInformation from "./public/pages/JobInformation"
import JobVaccuncies from "./public/pages/JobVaccuncies"
import Login from "./public/pages/Login"

import "./public/assets/css/style1.css"
import Singup from "./public/pages/Singup"
import ThankYou from "./public/pages/ThankYou"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublicLayout from "./public/PublicLayout"
import Register from "./public/pages/Register"
import CompanyLayout from "./company/CompanyLayout"
import Account from "./company/pages/Account"
import Jobs from "./company/pages/Jobs"
import Settings from "./company/pages/Settings"
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<PublicLayout />} />
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Singup />} />
          <Route path="company/register" element={<Register />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="company-detail/:eid" element={<EmployeeDetails />} />
          <Route path="candidate-detail/:cid" element={<CandidateDetails />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
        <Route path="/employer" element={<CompanyLayout />}>
          <Route index element={<Account />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App