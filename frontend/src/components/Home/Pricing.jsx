import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="flex w-full">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-slate-900">
            Unbeatable Pricing{" "}
          </h1>
          <p className="mt-8 text-lg text-slate-600 mb-5 max-w-[80%]">
            We pioneered the concept of discount broking and price transperncy
            in india. Flat fees and no hidden charges.
          </p>
          <Link className=" text-blue-600 " to={"/"}>
            See Pricing <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="w-1/2 flex text-center">
          <div className="w-1/2 flex border-1 p-12 border-gray-300 flex-col items-center ">
            <h1 className="text-4xl font-semibold text-slate-900">&#x20B9;0</h1>
            <p className="text-sm mt-4 text-slate-600 px-4">Free equity delivery and direct mutual funds</p>
          </div>
          <div className="w-1/2 flex border-1 p-12 border-gray-300 flex-col items-center ">
            <h1 className="text-4xl font-semibold text-slate-900">&#x20B9;20</h1>
            <p className="text-sm mt-4 text-slate-600 px-4">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
