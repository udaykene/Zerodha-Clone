import React from "react";
import { Link } from "react-router-dom";
const Awards = () => {
  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="p-5">
          <img
            src="/largestBroker.svg"
            alt="Largest broker illustration"
            className="h-auto w-full"
          />
        </div>
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-slate-900">
            Largest stock broker in india
          </h1>
          <p className="mt-3 font-normal text-slate-600">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volume in india daily by trading and investing in:
          </p>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <ul className="list-inside list-disc space-y-2 text-slate-700">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-inside list-disc space-y-2 text-slate-700">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds & Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="mt-6 h-auto w-full "
            src="/pressLogos.png"
            alt="Press logos"
          />
        </div>
      </div>
    </section>
  );
};

export default Awards;
