import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <img src="/homeHero.png" alt="Hero" className="mb-8 h-auto w-full " />
        <h3 className="mt-2 text-4xl font-semibold text-slate-900">
          Invest in everything
        </h3>
        <p className="mt-6 text-lg text-slate-600">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        <button className="mt-6 rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700  px-12 py-2 text-lg font-semibold text-white ">
          Signup Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
