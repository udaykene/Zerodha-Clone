import React from "react";
import { Link } from "react-router-dom";

const Investors = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="w-full flex flex-col gap-30">
        <p className="text-xl text-center font-normal text-slate-700">
          Want to know more about our technology stack? Check out the{" "}
          <Link to={"/"} className="text-blue-500 hover:underline">
            Zerodha.tech
          </Link>{" "}
          blog
        </p>

        <div className="w-full text-center">
          <h2 className="leading-1.5 text-2xl mb-10">The Zerodha Universe</h2>
          <p className="text-[1rem] leading-2 text-slate-600">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="w-full h-full flex flex-col gap-20 py-20">
            <div className="w-full h-full flex justify-between text-slate-600  items-center">
              <Link className="flex  flex-col justify-between gap-5 items-center  w-1/3">
                <img className="w-50" src="zerodhaFundhouse.png" alt="" />
                <p className="text-[0.75rem]">
                  Our asset management venture <br />
                  that is creating simple and transparent index <br />
                  funds to help you save for your goals.
                </p>
              </Link>
              <Link className="flex flex-col justify-between gap-10 items-center w-1/3">
                <img className="w-50" src="sensibullLogo.svg" alt="" />
                <p className="text-[0.75rem]">
                  Options trading platform that lets you <br />
                  create strategies, analyze positions, and examine <br />
                  data points like open interest, FII/DII, and more.
                </p>
              </Link>
              <Link className="flex flex-col justify-between gap-5 items-center w-1/3">
                <img className="w-40" src="tijori.svg" alt="" />
                <p className="text-[0.75rem]">
                  Investment research platform <br />
                  that offers detailed insights on stocks, <br />
                  sectors, supply chains, and more.
                </p>
              </Link>
            </div>
            <div className="w-full h-full flex justify-between text-slate-600  items-center">
              <Link className="flex  flex-col justify-between gap-5 items-center  w-1/3">
                <img className="w-50" src="streakLogo.png" alt="" />
                <p className="text-[0.75rem]">
                  Systematic trading platform <br />
                  that allows you to create and backtest <br />
                  strategies without coding.{" "}
                </p>
              </Link>
              <Link className="flex flex-col  gap-10 items-center w-1/3">
                <img className="w-50" src="smallcaseLogo.png" alt="" />
                <p className="text-[0.75rem]">
                  Thematic investing platform <br />
                  that helps you invest in diversified <br />
                  baskets of stocks on ETFs.
                </p>
              </Link>
              <Link className="flex flex-col justify-between gap-5 items-center w-1/3">
                <img className="w-40" src="dittoLogo.png" alt="" />
                <p className="text-[0.75rem]">
                  Personalized advice on life <br />
                  and health insurance. No spam <br />
                  and no mis-selling.
                </p>
              </Link>
            </div>
          </div>
          <button className="mt-6 rounded-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700  px-12 py-2 text-lg font-semibold text-white ">
          Signup Now
        </button>
        </div>
      </div>
    </section>
  );
};

export default Investors;
