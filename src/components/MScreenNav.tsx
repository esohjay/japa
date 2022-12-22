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
} from "react-icons/fa";
import NavItem from "./NavItem";

//redux
import { useAppDispatch } from "../hooks/redux-hooks";
import { openModal } from "../slices/appSlice";
import SearchBar from "./SearchBar";

function MScreenNav() {
  const dispatch = useAppDispatch();

  return (
    <div className=" w-full  hidden md:block lg:hidden">
      <div className="w-full bg-mainColor">
        <div className="h-14 flex px-5 justify-between max-w-[780px]  mx-auto gap-5 items-center">
          <Link to="/" className="shrink-0 mr-7">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex h-full justify-between items-center gap-3">
            <SearchBar screen="md" />
          </div>
          <NavLink
            to={`lang`}
            className="block hover:bg-hoverColor  text-white p-3 rounded-md  text-2xl"
          >
            <BsGlobe />
          </NavLink>
          <button
            onClick={() => dispatch(openModal(1))}
            className="inline-block py-2 px-5 text-sm border-none rounded-full bg-mainColor text-white  capitalize
        hover:border hover:border-white"
          >
            add question/post
          </button>
        </div>
      </div>
      <nav className="flex h-14 px-5 max-w-[780px]  mx-auto w-full gap-x-6 justify-between items-center bg-white">
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
          className="block hover:bg-hoverColor text-lightText p-3 rounded-md  text-2xl"
        >
          <FaUser />
        </NavLink>
      </nav>
    </div>
  );
}

export default MScreenNav;
