import Navigation from "../components/Navigation"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default Layout