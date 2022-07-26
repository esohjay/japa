import React from "react";
import { Link } from "react-router-dom";
import { QuestionData } from "../interfaces/interfaces";

import { BsPenFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { GiShadowFollower } from "react-icons/gi";

interface QuestionProp {
  data: QuestionData;
}
function Question({ data }: QuestionProp) {
  return (
    <article className="w-full bg-white p-5 hover:bg-hoverColor">
      <Link to={``}>
        <h3 className="font-bold text-textColor font-base mb-1 hover:underline">
          {data.title}
        </h3>
      </Link>
      <p className="text-xs text-lightText font-semibold mb-3">
        {" "}
        {data.answers.length === 1
          ? `${data.answers.length} answer`
          : data.answers.length > 1
          ? `${data.answers.length} answer`
          : "No answer yet"}
      </p>
      <div className="flex items-center gap-x-4">
        <button
          className="flex items-center text-[14px]  py-2 rounded-full hover:bg gap-2
        text-lightText font-semibold"
        >
          <BsPenFill className="text-mainColor" /> Answer
        </button>
        <button
          className="flex items-center text-[14px]  py-2 rounded-full hover:bg gap-2
        text-lightText font-semibold"
        >
          <GiShadowFollower /> Follows {data.follows.length}
        </button>
        <button
          className="flex items-center text-[14px]  py-2 rounded-full hover:bg gap-2
        text-lightText font-semibold"
        >
          <FaShare /> Share
        </button>
      </div>
    </article>
  );
}

export default Question;
