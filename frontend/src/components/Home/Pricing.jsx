import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20">
      <div className="flex w-full items-center">
        {/* Left Side - Untouched as requested */}
        <div className="w-1/3">
          <h1 className="text-4xl font-semibold text-slate-900">
            Unbeatable Pricing{" "}
          </h1>
          <p className="mt-8 text-lg text-slate-600 mb-5 max-w-[80%]">
            We pioneered the concept of discount broking and price transperncy
            in india. Flat fees and no hidden charges.
          </p>
          <Link className=" text-blue-600 " to={"/"}>
            See Pricing <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>

        {/* Fixed Right Side */}
        <div className="w-2/3 grid grid-cols-3 gap-2">
          <div className="flex items-center">
            <img className="w-40" src="/pricing0.svg" alt="0" />
            <p className="text-[11px] leading-tight text-slate-500 ml-[-10px]">
              Free account<br />opening
            </p>
          </div>
          
          <div className="flex items-center">
            <img className="w-40" src="/pricingEquity.svg" alt="0" />
            <p className="text-[11px] text-slate-500 ">
              Free equity delivery<br />and direct mutual funds
            </p>
          </div>

          <div className="flex items-center">
            <img className="w-40" src="/intradayTrades.svg" alt="20" />
            <p className="text-[11px] leading-tight text-slate-500 ml-[-10px]">
              Intraday and<br />F&O
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;