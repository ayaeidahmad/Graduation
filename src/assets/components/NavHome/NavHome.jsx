import Company from "../Compoany/Company"
import Exciting from "../Exciting/Exciting"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import NavBar from "../Navbar/NavBar"
import Opinion from "../Opinion/Opinion"
import WhoAreWe from "../WhoAreWe/WhoAreWe"
// import ScrollToTop from "../scrollToTop/scrollToTop"
import './NavHome.css'

const NavHome = () => {
    return (
        <>
        <NavBar/>
        <Hero/>
        <Company/>
        <WhoAreWe/>
        <Exciting/>
        <Opinion/>
        <Footer/>
        {/* <ScrollToTop/> */}
        </>
    )
}


export default NavHome