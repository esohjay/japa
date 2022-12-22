import React from "react";

//icon
import { FaAngleLeft } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

import SearchBar from "../components/SearchBar";

function Search() {
  return (
    <section
      className={` fixed top-0 w-full z-[53] h-screen md:mt-28 lg:mt-14 bg-black  place-items-center bg-opacity-50 backdrop-blur-sm backdrop-filter
`}
    >
      <article className="bg-white w-full max-w-3xl mx-auto md:rounded-bl-md md:rounded-br-md relative min-h-[550px]">
        <div className="w-full flex bg-mainColor items-center gap-x-2 p-1 md:hidden">
          <button className="text-2xl text-white border-none outline-none bg-transparent">
            <FaAngleLeft />
          </button>
          <SearchBar screen="sm" />
        </div>
        <article className=" border-t-8 border-t-slate-200">
          <div className="flex items-center gap-x-2 p-3  border-b mb-3">
            <button className="text-base text-white bg-mainColor p-[6px] rounded-md">
              <TiGroup />
            </button>
            <h3 className="font-semibold text-sm">
              Recommended Spaces for You
            </h3>
          </div>
          <div className="flex items-start gap-x-3 border-b px-3 py-1">
            <button className="text-xl text-white bg-mainColor p-3 rounded-md">
              <TiGroup />
            </button>
            <div className="">
              <h3 className="capitalize font-semibold text-base">
                fully funded scholarship
              </h3>
              <p className="text-lightText text-xs">8.7k followers</p>
              <p className="text-textColor text-xs">
                Find authentic fully funded scholarships for all levels from
                across the world.
              </p>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default Search;
