import Navigation from "../components/Navigation"
import { Outlet, useLocation } from "react-router"

const Layout = () => {
    const location = useLocation();

    console.log(location.pathname);
    const backgroundImages = {
        "/": "images/home/background-home-desktop.jpg",
        "/crew": "images/crew/background-crew-desktop.jpg",
        "/destination": "images/destination/background-destination-desktop.jpg",
        "/technology": "images/technology/background-technology-desktop.jpg",
    }

    const backgroundImage = backgroundImages[location.pathname] || "none";


  return (
    <div style={{backgroundImage: `url(${backgroundImage})`}} className="font-cardo bg-cover bg-center bg-fixed min-h-dvh">
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default Layout