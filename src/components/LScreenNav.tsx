//external package
import { NavLink, Link } from "react-router-dom";

//icons
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

//redux
import { useAppDispatch } from "../hooks/redux-hooks";
import { openModal } from "../slices/appSlice";

//components
import logo from "../assets/images/logo2.png";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

function LScreenNav() {
  const dispatch = useAppDispatch();

  return (
    <div className=" w-full max-w-[1100px] h-14  justify-between gap-5 mx-auto items-center hidden lg:flex">
      <Link to="/" className="shrink-0 mr-7">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="flex h-full gap-x-6 justify-between items-center">
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
      </nav>
      <div className="flex h-full justify-between items-center gap-3">
        <SearchBar screen="lg" />
        <NavLink
          to={`profile`}
          className="block hover:bg-hoverColor text-lightText p-3 rounded-md  text-2xl"
        >
          <FaUser />
        </NavLink>
        <NavLink
          to={`lang`}
          className="block hover:bg-hoverColor text-lightText p-3 rounded-md  text-2xl"
        >
          <BsGlobe />
        </NavLink>
      </div>
      <button
        onClick={() => dispatch(openModal(1))}
        className="inline-block py-2 px-5 text-sm rounded-full bg-mainColor text-white capitalize"
      >
        add question/post
      </button>
    </div>
  );
}

export default LScreenNav;
