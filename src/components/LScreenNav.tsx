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
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { openModal, closeModal, modalState } from "../slices/appSlice";

//components
import logo from "../assets/images/logo2.png";
import NavItem from "./NavItem";

function LScreenNav() {
  const modal = useAppSelector(modalState);
  console.log(modal);
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
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-2 pl-10 w-full text-sm text-lightText bg-white rounded-sm border  "
            placeholder="Search japariansHQ"
          />
        </div>
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
        onClick={() => dispatch(openModal())}
        className="inline-block py-2 px-5 text-sm rounded-full bg-mainColor text-white capitalize"
      >
        add question/post
      </button>
    </div>
  );
}

export default LScreenNav;
