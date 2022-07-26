import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/User-avatar.png";

import { PostData } from "../interfaces/interfaces";

//icons

import { TbArrowBigDown, TbArrowBigTop } from "react-icons/tb";
import { FaRegComment, FaShare } from "react-icons/fa";

interface PostProp {
  data: PostData;
}
function Post({ data }: PostProp) {
  return (
    <article className="w-full bg-white p-5 hover:bg-hoverColor mb-3">
      <div className="flex items-center gap-x-3 mb-3">
        <figure className="h-[32px] w-[32px] rounded-full">
          <img
            src={avatar}
            alt="user avatar"
            className="h-full w-full max-h-full max-w-full"
          />
        </figure>
        <div>
          <p className="text-sm text-textColor font-bold mb-1 capitalize">
            {data.author}{" "}
            <span>
              <Link to="/" className="text-blue-500">
                Follow
              </Link>
            </span>
          </p>
          <p className="text-sm text-lightText  ">{data.bio}</p>
        </div>
      </div>
      <Link to={``}>
        <h3 className="font-bold text-textColor capitalize font-base mb-3 hover:underline">
          {data.title}
        </h3>
      </Link>
      <p className="text-textColor text-sm md:text-[15px] mb-3">
        {data.content}
      </p>
      {data.image && (
        <figure className="w-full h-[280px] lg:h-[330px] mb-3">
          <img
            src={data.image}
            alt={data.title}
            className="max-w-full mx-auto block max-h-full"
          />
        </figure>
      )}
      <div className="flex items-center gap-x-5">
        <span className="flex">
          <button
            className="flex items-center gap-1 text-lightText bg-bodyBg 
          hover:bg-grayHoverColor py-2 px-3 rounded-tl-full rounded-bl-full "
          >
            <TbArrowBigTop /> {data.upvotes.count}
          </button>
          <button
            className="flex items-center gap-1 text-lightText bg-bodyBg hover:bg-grayHoverColor py-1 border-l px-4
          rounded-tr-full rounded-br-full"
          >
            <TbArrowBigDown />
            {data.downvotes.count > 0 ? data.downvotes.count : null}
          </button>
        </span>
        <button className="flex items-center gap-1 text-lightText hover:bg-grayHoverColor p-2 rounded-full">
          <FaRegComment /> {data.replies.length}
        </button>
        <button className="flex items-center gap-1 text-lightText hover:bg-grayHoverColor p-1 rounded-full">
          <FaShare />
        </button>
      </div>
    </article>
  );
}

export default Post;
