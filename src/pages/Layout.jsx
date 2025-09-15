import Navigation from "../components/Navigation";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();

  const backgroundImages = {
    desktop: {
      "/": "images/home/background-home-desktop.jpg",
      "/crew": "images/crew/background-crew-desktop.jpg",
      "/destination": "images/destination/background-destination-desktop.jpg",
      "/technology": "images/technology/background-technology-desktop.jpg",
    },
    tablet: {
      "/": "images/home/background-home-tablet.jpg",
      "/crew": "images/crew/background-crew-tablet.jpg",
      "/destination": "images/destination/background-destination-tablet.jpg",
      "/technology": "images/technology/background-technology-tablet.jpg",
    },
    mobile: {
      "/": "images/home/background-home-mobile.jpg",
      "/crew": "images/crew/background-crew-mobile.jpg",
      "/destination": "images/destination/background-destination-mobile.jpg",
      "/technology": "images/technology/background-technology-mobile.jpg",
    },
  };

  // const backgroundImage = backgroundImages[location.pathname] || "none";

  return (
    <div
      style={{
        "--bg-mobile": `url(${
          backgroundImages.mobile[location.pathname] || "none"
        })`,
        "--bg-tablet": `url(${
          backgroundImages.tablet[location.pathname] || "none"
        })`,
        "--bg-desktop": `url(${
          backgroundImages.desktop[location.pathname] || "none"
        })`,
      }}
      className="
      font-cardo bg-cover bg-center bg-fixed min-h-dvh
      bg-[image:var(--bg-mobile)]
      sm:bg-[image:var(--bg-tablet)]
      lg:bg-[image:var(--bg-desktop)]"
    >
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
