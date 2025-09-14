import { NavLink } from "react-router"

const Navigation = () => {
  return (
    <div className="py-10 flex justify-between items-center text-white">
        <div className="pl-20">
            <img src="images/shared/logo.svg" alt="Logo" />
        </div>

        <div className="bg-slate-700/35 flex items-center py-8">
            <ul className="flex space-x-11 text-sm pl-50 pr-20">
                <NavLink to={"/"} className={({ isActive }) =>`cursor-pointer relative pb-2 ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full after:transition-all after:duration-300" : "after:w-0"}`}><li className="font-thin hover:text-gray-500 duration-300"><span className="font-extrabold text-lg pr-2">00</span>  <span className="font-light">HOME</span></li></NavLink>
                <NavLink to={"/destination"} className={({isActive}) => `cursor-pointer relative pb-2 ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full after:transition-all after:duration-300" : "after:w-0"}`}><li className="font-thin hover:text-gray-500 duration-300"><span className="font-extrabold text-lg pr-2">01</span> DESTINATION</li></NavLink>
                <NavLink to={"/crew"}  className={({isActive}) => `cursor-pointer relative pb-2 ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full after:transition-all after:duration-300" : "after:w-0"}`}><li className="font-thin hover:text-gray-500 duration-300"><span className="font-extrabold text-lg pr-2">02</span> CREW</li></NavLink>
                <NavLink to={"/technology"}  className={({isActive}) => `cursor-pointer relative pb-2 ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full after:transition-all after:duration-300" : "after:w-0"}`}><li className="font-thin hover:text-gray-500 duration-300"><span className="font-extrabold text-lg pr-2">03</span> TECHNOLOGY</li></NavLink>
            </ul>
        </div>

    </div>
  )
}

export default Navigation