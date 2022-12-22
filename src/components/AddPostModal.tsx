import React, { useRef, useEffect } from "react";

import { GrClose } from "react-icons/gr";
import {
  closeModal,
  modalState,
  selectModalIndex,
  modalIndex,
} from "../slices/appSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";

function AddPostModal() {
  const index = useAppSelector(selectModalIndex);
  const modalOpen = useAppSelector(modalState);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent): void => {
      if (modalOpen && ref.current && !ref.current.contains(e.target as Node)) {
        dispatch(closeModal());
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [modalOpen, dispatch]);
  return (
    <section
      className={` fixed top-0 w-full z-[53] h-screen px-5 md:px-16 bg-black  place-items-center bg-opacity-50 backdrop-blur-sm backdrop-filter
    ${modalOpen ? "grid" : "hidden"}`}
    >
      <article
        ref={ref}
        className="bg-white w-full  max-w-3xl mx-auto rounded-md relative min-h-[550px]"
      >
        <nav className="flex items-center border-b mb-2 px-1">
          <button
            onClick={() => dispatch(closeModal())}
            className="block text-center p-3 capitalize rounded-full text-lg md:text-2xl font-extralight mr-2
           hover:bg-hoverColor"
          >
            <GrClose />
          </button>
          <button
            onClick={() => dispatch(modalIndex(1))}
            className={`block text-center text-sm md:text-base py-4 font-semibold w-full capitalize hover:bg-hoverColor
            ${index === 1 && "border-b-2 border-b-mainColor"}`}
          >
            add question
          </button>
          <button
            onClick={() => dispatch(modalIndex(2))}
            className={`block text-center text-sm md:text-base py-4 font-semibold w-full capitalize hover:bg-hoverColor first-letter
            ${index === 2 && "border-b-2 border-b-mainColor"}`}
          >
            create post
          </button>
        </nav>
        <article className="p-4">
          <div className={`${index === 1 ? "block" : "hidden"}`}>
            <div className="bg-[#edf6f9] p-3 rounded-md mb-5">
              <h3 className="text-mainColor font-bold mb-2 text-xs md:text-sm">
                Tips on getting good answers quickly
              </h3>
              <ul className="text-mainColor list-disc list-inside text-xs md:text-sm">
                <li>Make sure your question has not been asked already</li>
                <li>Keep your question short and to the point</li>
                <li>Double-check grammar and spelling</li>
              </ul>
            </div>
            <textarea
              name=""
              id=""
              rows={5}
              placeholder="Start your question with 'What', 'How', 'Why'"
              className="w-full p-3 block text-sm md:text-base focus:outline-none border-b border-b-mainColor mb-2"
            ></textarea>
            <div className="flex justify-end mt-5 border-t absolute w-full bottom-3 left-0 px-5 pt-4">
              <button
                onClick={() => dispatch(closeModal())}
                className="inline-block bg-transparent font-medium py-2 px-6 capitalize text-xs md:text-sm"
              >
                cancel
              </button>
              <button className="inline-block bg-mainColor capitalize text-white rounded-full py-1 px-4 text-xs md:text-sm font-medium">
                add question
              </button>
            </div>
          </div>
          {/* Post */}
          <div className={`${index === 2 ? "block" : "hidden"}`}>
            <textarea
              name=""
              id=""
              rows={5}
              placeholder="Start your question with 'What', 'How', 'Why'"
              className="w-full p-3 block text-sm md:text-base focus:outline-none border-b border-b-mainColor mb-2"
            ></textarea>
            <div className="flex justify-end mt-5 border-t absolute w-full bottom-3 left-0 px-5 pt-4">
              <button
                onClick={() => dispatch(closeModal())}
                className="inline-block bg-transparent font-medium py-2 px-6 capitalize text-xs md:text-sm"
              >
                cancel
              </button>
              <button className="inline-block bg-mainColor capitalize text-white rounded-full py-1 px-4 text-xs md:text-sm font-medium">
                add question
              </button>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default AddPostModal;
