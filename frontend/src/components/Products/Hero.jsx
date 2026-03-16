import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="flex flex-col gap-4 py-25 items-center justify-center border-b-1 border-gray-200 text-center">
        <h1 className="text-3xl leading-5 font-semibold text-slate-900">
          Zerodha Products
        </h1>
        <p className="text-[24px] mt-1.5 font-normal leading-7 text-slate-700">Sleek, modern, and intuitive trading platforms</p>
        <p className="text-xl mt-[10px]">Check out our <Link className="text-blue-600"> investment offerings →</Link></p>
      </div>
    </section>
  );
};

export default Hero;
