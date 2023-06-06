import CandidateProfile from "../components/CandidateProfile"
import Navbar from "../components/Navbar"
import PersonalDetails from "../components/PersonalDetails"
import RelatedCandidates from "../components/RelatedCandidates"

const CandidateDetails = () => {
    return <>
        <Navbar />
        <CandidateProfile />
        <PersonalDetails />
        <RelatedCandidates />
    </>
}

export default CandidateDetails