import React from "react";
import { NavLink } from "react-router-dom";

type PropType = {
  activeIcon: React.ReactNode;
  inActiveIcon: React.ReactNode;
  path: string;
};
function NavItem({ activeIcon, inActiveIcon, path }: PropType) {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "block hover:bg-hoverColor h-full text-mainColor pt-4 md:pt-3 rounded-md px-2 text-xl md:text-3xl relative"
            : "hidden"
        }
      >
        {activeIcon}
        <div className="h-1 w-full bg-mainColor absolute bottom-0 left-0"></div>
      </NavLink>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "hidden"
            : "inline-block hover:bg-hoverColor text-lightText  rounded p-3 text-lg md:text-2xl  "
        }
      >
        {inActiveIcon}
      </NavLink>
    </>
  );
}

export default NavItem;
