import { NavLink } from "react-router"

const Navigation = () => {
  return (
    <div className="py-10 flex justify-between items-center text-white">
        <div className="pl-20">
            <img src="images/shared/logo.svg" alt="Logo" />
        </div>

        <div className="bg-slate-700/35 flex items-center py-8">
            <ul className="flex space-x-11 text-sm pl-50 pr-20">
                <NavLink to={"/"}><li className="font-thin"><span className="font-extrabold text-lg pr-2">00</span>  <span className="font-light ">HOME</span></li></NavLink>
                <NavLink to={"/destination"}><li className="font-thin"><span className="font-extrabold text-lg pr-2">01</span> DESTINATION</li></NavLink>
                <NavLink to={"/crew"}><li className="font-thin"><span className="font-extrabold text-lg pr-2">02</span> CREW</li></NavLink>
                <NavLink to={"/technology"}><li className="font-thin"><span className="font-extrabold text-lg pr-2">03</span> TECHNOLOGY</li></NavLink>
            </ul>
        </div>

    </div>
  )
}

export default Navigation