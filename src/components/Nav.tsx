import logo from "../img/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { AppsProps } from "../types";

const DesktopNav = ({ location, navigate }: AppsProps) => (
  <div
    className="w-100 d-flex justify-content-between p-0 position-absolute"
    style={
      location === "/"
        ? { color: "white" }
        : { color: "black", backgroundColor: "#fafafa" }
    }
  >
    <div className="px-5 py-3">
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      />
    </div>
    <div className="px-5 py-3 d-flex justify-content-between">
      <p className="px-5 nav-links">Personajes</p>
      <p className="px-5 nav-links">Episodios</p>
    </div>
  </div>
);
const MobileNav = ({ location, navigate }: AppsProps) => (
  <div
    className="w-100 d-flex justify-content-center p-0 position-absolute"
    style={
      location === "/"
        ? { color: "white" }
        : { color: "black", backgroundColor: "#fafafa" }
    }
  >
    <div className="px-5 py-3">
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      />
    </div>
  </div>
);

const Nav = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let currentLocation = location.pathname;
  console.log(currentLocation);
  let width = window.innerWidth;
  let isDesktop: boolean = width > 480 ? true : false;
  return isDesktop ? (
    <DesktopNav location={currentLocation} navigate={navigate} />
  ) : (
    <MobileNav location={currentLocation} navigate={navigate} />
  );
};

export default Nav;
