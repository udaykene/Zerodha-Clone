import React from "react";
import { Link } from "react-router-dom";
const RightImage = ({
  imageUrl,
  heading,
  content,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/3 md:pl-10">
          <h2 className="mb-5 text-2xl font-semibold leading-[1.5] text-neutral-700">
            {heading}
          </h2>
          <p className="text-base leading-[1.8] text-neutral-600">{content}</p>
          <div className="mt-6 flex items-center gap-10">
            {tryDemo && (
              <Link
                to={tryDemo.link}
                className="inline-flex items-center gap-2 text-sm font-normal text-blue-600"
              >
                {tryDemo.content} <i class="fa-solid fa-arrow-right"></i>
              </Link>
            )}
            {learnMore && (
              <Link
                to={learnMore.link}
                className="inline-flex items-center gap-2 text-sm font-normal text-blue-600"
              >
                {learnMore.content}
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
            )}
          </div>
          <div className="mt-6 flex items-center gap-4">
            {googlePlay && (
              <img className="h-10 w-auto" src={googlePlay} alt="" />
            )}
            {appStore && <img className="h-10 w-auto" src={appStore} alt="" />}
          </div>
        </div>
        <div className="w-full flex justify-evenly items-center md:w-2/3 ">
          <img className="h-auto w-[80%]" src={imageUrl} alt="" />
        </div>
      </div>
    </section>
  );
};

export default RightImage;
