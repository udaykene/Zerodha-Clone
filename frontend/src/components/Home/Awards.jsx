import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="public/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5">
          <h1>Largest stock broker in india</h1>
          <p className="font-normal">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volume in india daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul className=" list-disc">
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
            <div className="col-6">
              <ul className=" list-disc">
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
          <img className="mt-4" src="public/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
