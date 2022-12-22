import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logowhite.png";

import { VscHome } from "react-icons/vsc";
import { TiGroupOutline, TiGroup, TiHome } from "react-icons/ti";
import { BsGlobe, BsPen, BsPenFill } from "react-icons/bs";
import {
  FaListAlt,
  FaRegListAlt,
  FaBell,
  FaRegBell,
  FaUser,
  FaSearch,
  FaRegQuestionCircle,
} from "react-icons/fa";
import NavItem from "./NavItem";

//redux
import { useAppDispatch } from "../hooks/redux-hooks";
import { openModal, openSearchScreen } from "../slices/appSlice";

function SScreenNav() {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full  md:hidden">
      <div className="w-full bg-mainColor h-14 flex px-5 justify-between gap-5 items-center">
        <button
          onClick={() => dispatch(openSearchScreen())}
          className="text-white text-sm capitalize gap-2 flex items-center"
        >
          <FaSearch /> search
        </button>
        <Link to="/" className="h-10 w-28">
          <img
            src={logo}
            alt="logo"
            className="h-full w-full max-h-full max-w-full"
          />
        </Link>
        <button
          onClick={() => dispatch(openModal(1))}
          className="text-white text-sm capitalize gap-2 flex items-center"
        >
          <FaRegQuestionCircle /> add
        </button>
      </div>
      <nav className="flex h-14 px-5  w-full gap-x-2 justify-between items-center bg-sectionBg">
        <NavItem activeIcon={<TiHome />} inActiveIcon={<VscHome />} path="/" />
        <NavItem
          activeIcon={<FaListAlt />}
          inActiveIcon={<FaRegListAlt />}
          path="posts"
        />
        <NavItem
          activeIcon={<BsPenFill />}
          inActiveIcon={<BsPen />}
          path="answer"
        />
        <NavItem
          inActiveIcon={<TiGroupOutline />}
          activeIcon={<TiGroup />}
          path="trends"
        />
        <NavItem
          inActiveIcon={<FaRegBell />}
          activeIcon={<FaBell />}
          path="notifications"
        />
        <NavLink
          to={`profile`}
          className="inline-block hover:bg-hoverColor text-lightText  rounded p-3 text-lg md:text-2xl"
        >
          <FaUser />
        </NavLink>
        <NavLink
          to={`lang`}
          className="inline-block hover:bg-hoverColor text-lightText p-3 rounded-md text-lg md:text-2xl"
        >
          <BsGlobe />
        </NavLink>
      </nav>
    </div>
  );
}

export default SScreenNav;
