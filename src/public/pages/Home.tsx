import "./../assets/css/style.css"
import Hero from '../components/Hero'
import Services from "../components/Services"
import PopularJobs from "../components/PopularJobs"
import Stat from "../components/Stat"
import BestCompnay from "../components/BestCompnay"
import Qa from "../components/Qa"
import Footer from "../components/Footer"

const Home = () => {
    return <>
        <Hero />
        <Services />
        <PopularJobs />
        <Stat />
        <BestCompnay />
        <Qa />
        <Footer />
    </>
}

export default Home