import {  RouterProvider, createBrowserRouter } from "react-router-dom"
// import { Navbar } from "react-bootstrap"
// import Company from "./assets/components/Compoany/Company"
// import Exciting from "./assets/components/Exciting/Exciting"
// import Footer from "./assets/components/Footer/Footer"
// import Hero from "./assets/components/Hero/Hero"
import Login from "./assets/components/Login/Login"
// import NavBar from "./assets/components/Navbar/NavBar"
// import Opinion from "./assets/components/Opinion/Opinion"
import SignUp from "./assets/components/SignUp/SignUp"
// import WhoAreWe from "./assets/components/WhoAreWe/WhoAreWe"
import NavHome from "./assets/components/NavHome/NavHome"



const App = () => {
        const Routing = createBrowserRouter([
            {path:"/" , element: <NavHome/>} ,
            {path:"/login" , element: <Login/>} ,
            {path:"/signup" , element: <SignUp/> } ,
        ])
  return (
    <>
      <RouterProvider router={Routing}>
      <NavHome/>
      </RouterProvider>
    </>
    
  
  )
}

export default App