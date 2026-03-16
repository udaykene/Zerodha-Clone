import React from "react";
import { Link } from "react-router-dom";

const FounderInfo = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-6xl px-4">
      <h2 className="text-center text-2xl text-[#424242] leading-6 mb-5">
        People
      </h2>
      <div className="flex w-full  gap-10 pt-11">
        <div className="flex w-2/5 flex-col items-center">
          <img
            className="w-90 rounded-full object-center mb-4"
            src="/nithinKamath.jpg"
            alt=""
          />
          <h5 className="text-lg ">Nithin Kamath</h5>
          <p className="text-md my-3.5">Founder, CEO</p>
        </div>
        <div className=" w-3/5 text-xl text-[#424242]  ">
          <p className="my-4 leading-[1.8]">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="my-4 leading-[1.8]">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="my-4 leading-[1.8]">Playing basketball is his zen.</p>
          <p className="my-4 leading-[1.8]">
            Connect on <Link to={'/'} className="text-blue-500" >Homepage </Link> / <Link to={'/'} className="text-blue-500">TradingQnA</Link> /
            <Link to={'/'} className="text-blue-500">Twitter</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderInfo;
