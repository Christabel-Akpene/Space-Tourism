import { NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/", number: "00", label: "HOME" },
  { path: "/destination", number: "01", label: "DESTINATION" },
  { path: "/crew", number: "02", label: "CREW" },
  { path: "/technology", number: "03", label: "TECHNOLGOY" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const openNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const getActiveClassName = (isActive) =>
  `cursor-pointer relative pb-2 ${
    isActive
      ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full after:transition-all after:duration-600"
      : "after:w-0"
  }`;


  return (
    <div className="py-8 flex justify-between items-center text-white">
      <div className=" px-7 lg:pl-20">
        <img src="images/shared/logo.svg" alt="Logo" />
      </div>

      <div className="flex items-center ">
        <div onClick={openNav} className="sm:hidden pr-8">
          <img src="images/shared/icon-hamburger.svg" alt="Open menu" />
        </div>

        {open && (
          <div className="fixed top-0 right-0 flex flex-col h-dvh w-3/4 pt-10 backdrop-blur-lg">
            <button onClick={closeNav} className="flex justify-end pr-10 pb-10">
              <img src="images/shared/icon-close.svg" alt="" />
            </button>
            <ul className="flex flex-col space-y-10 text-2xl pl-8">
              <NavLink to={"/"}>
                <li>
                  <span className="font-bold">00</span>{" "}
                  <span className="text-gray-400">Home</span>
                </li>
              </NavLink>
              <NavLink to={"/destination"}>
                <li>
                  <span className="">01</span>{" "}
                  <span className="text-gray-400">Destination</span>
                </li>
              </NavLink>
              <NavLink to={"/crew"}>
                <li>
                  <span className="">02</span>{" "}
                  <span className="text-gray-400">Crew</span>
                </li>
              </NavLink>
              <NavLink to={"/technology"}>
                <li>
                  <span className="">03</span>{" "}
                  <span className="text-gray-400">Technology</span>
                </li>
              </NavLink>
            </ul>
          </div>
        )}

        <ul className="hidden text-sm py-8 sm:space-x-6 sm:bg-slate-700/35 sm:flex sm:fixed sm:top-0 sm:right-0 sm:px-10 lg:static lg:pl-50 lg:pr-20">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => getActiveClassName(isActive)}
            >
              <li className="font-thin hover:text-gray-300 duration-300">
                <span className="font-extrabold text-lg pr-2">
                  {item.number}
                </span>
                <span className="font-light">{item.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
