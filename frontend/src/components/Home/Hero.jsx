import React from "react";

const Hero = () => {
  return (
    <div className="container mb-5">
      <div className=" flex flex-col justify-center items-center">
        <img src="public/homeHero.png" alt="stats" className="mb-5" />
        <h3 className="mt-2 text-4xl!">Invest in everything</h3>
        <p className="text-lg">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        <button className="py-2 mt-2 text-2xl text-white px-12 rounded-lg! bg-blue-600">Signup Now</button>
      </div>
    </div>
  );
};

export default Hero;
