import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="w-full flex flex-col  items-center gap-5 justify-center text-center">
        <div className="py-20 flex flex-col  items-center gap-5 justify-center ">
          <h1 className="text-3xl">Charges</h1>
          <p className="text-xl text-slate-500 font-normal">
            List of all charges and taxes
          </p>
        </div>
        <div className="w-full flex gap-15 p-20">
          <div className="flex w-1/3 flex-col">
            <img className="" src="/pricingEquity.svg" alt="" />
            <h2 className="text-3xl mb-5">Free equity delivery</h2>
            <p className="text-md text-slate-500  ">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="flex w-1/3 flex-col">
            <img className="" src="/intradayTrades.svg" alt="" />
            <h2 className="text-3xl mb-5">Intraday and F&O trades</h2>
            <p  className="text-md text-slate-500 ">
             Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="flex w-1/3 flex-col">
            <img className="" src="/pricing0.svg" alt="" />
            <h2 className="text-3xl mb-5">Free direct MF</h2>
            <p  className="text-md text-slate-500 ">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
