import React from "react";

const OpenAccount = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="mt-2 text-4xl font-semibold text-slate-900">
         Open a Zerodha account
        </h3>
        <p className="mt-8 text-lg text-slate-600">
          Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.
        </p>

        <button className="mt-6 rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700  px-12 py-2 text-lg font-semibold text-white ">
          Signup Now
        </button>
      </div>
    </section>
  );
};

export default OpenAccount;
