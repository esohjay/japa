import React from "react";

//redux
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { openSearchScreen, selectSearchScreenState } from "../slices/appSlice";
interface SearchType {
  screen: string;
}
function SearchBar({ screen }: SearchType) {
  const dispatch = useAppDispatch();
  const searchOpen = useAppSelector(selectSearchScreenState);
  const handleClick = (screen: string) => {
    if (screen === "sm") {
      return;
    } else {
      dispatch(openSearchScreen());
    }
  };
  return (
    <div className="relative w-full">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className={`w-5 h-5  dark:text-gray-400 ${
            screen === "sm" ? "text-slate-50" : "text-gray-500"
          }`}
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
        className={`block p-2 pl-10 w-full text-sm  rounded-sm  cursor-text 
      focus:border focus:border-mainColor focus:outline-none ${
        screen === "sm"
          ? "bg-[#0E750C] border-none text-slate-50 placeholder-slate-50"
          : "bg-white border text-lightText"
      }`}
        placeholder="Search japariansHQ"
        readOnly={!searchOpen}
        onClick={() => handleClick(screen)}
      />
    </div>
  );
}

export default SearchBar;
