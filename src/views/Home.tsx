import React from "react";

//components
import Post from "../components/Post";

//interface
import { PostData } from "../interfaces/interfaces";

import avatar from "../assets/images/User-avatar.png";

//icons
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsPen } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";

function Home() {
  const postData: PostData = {
    author: "Olusoji Daramola",
    bio: "Student of salford university, manchester",
    title: "How to move to Uk with ease",
    content:
      "He travels between SpaceX and Tesla quite a bit - and one of the few major luxuries he owns is an executive jet that gets him from A to B whenever he needs it.",
    upvotes: { count: 20, users: ["3", "8"] },
    downvotes: { count: 0, users: ["3", "8"] },
    replies: [{ name: "John", id: "1", text: "Nice one" }],
  };
  return (
    <section className="w-full max-w-[568px] mx-auto">
      <article className="bg-white w-full  p-5  border mx-auto mb-2 md:mb-3">
        <form className=" flex gap-x-5 items-center mb-3">
          <figure className="h-[32px] w-[32px] rounded-full">
            <img
              src={avatar}
              alt="user avatar"
              className="h-full w-full max-h-full max-w-full"
            />
          </figure>
          <input
            type="text"
            disabled
            placeholder="What do you want to ask or share?"
            className="block rounded-full bg-sectionBg w-full py-1 px-3 cursor-pointer "
          />
        </form>
        <div className="grid grid-cols-3 place-items-center">
          <div className="w-full ">
            <button className="p-2  text-lightText rounded-full hover:bg-hoverColor  w-full text-center text-sm capitalize gap-2 justify-center flex items-center">
              <FaRegQuestionCircle /> <span>ask</span>
            </button>
          </div>
          <div className="border-l lg:border-l-0 w-full">
            <button className="p-2  text-lightText rounded-full hover:bg-hoverColor w-full text-center text-sm justify-center capitalize gap-2 flex items-center">
              <BsPen /> answer
            </button>
          </div>
          <div className="border-l lg:border-l-0 w-full">
            <button className="p-2  text-lightText rounded-full hover:bg-hoverColor w-full text-center text-sm justify-center capitalize gap-2 flex items-center">
              <MdPostAdd /> post
            </button>
          </div>
        </div>
      </article>
      <section className="w-full">
        <Post data={postData} />
      </section>
    </section>
  );
}

export default Home;
