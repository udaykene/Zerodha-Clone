import React, { useState } from "react";
import { Link } from "react-router-dom";
const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("Equity");

  const tabs = ["Equity", "Currency", "Commodity"];

  const tableHeads = {
    Equity: [
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],
    Currency: ["Currency futures", "Currency options"],
    Commodity: ["Commodity futures", "Commodity options"],
  };

  const pricingData = {
    Equity: [
      {
        label: "Brokerage",
        delivery: "Zero Brokerage",
        intraday: "	0.03% or Rs. 20/executed order whichever is lower",
        futures: "0.03% or Rs. 20/executed order whichever is lower",
        options: "Flat Rs. 20 per executed order",
      },
      {
        label: "STT/CTT",
        delivery: "0.1% on buy & sell",
        intraday: "0.025% on the sell side",
        futures: "0.02% on the sell side",
        options: (
          <div className="px-2">
            <ul className="list-disc ">
              <li>
                0.125% of the intrinsic value on options that are bought and
                exercised
              </li>
              <li>0.1% on sell side (on premium)</li>
            </ul>
          </div>
        ),
      },
      {
        label: "Transaction Charges",
        delivery: (
          <p>
            NSE: 0.00307% <br />
            BSE: 0.00375%
          </p>
        ),
        intraday: (
          <p>
            NSE: 0.00307% <br />
            BSE: 0.00375%
          </p>
        ),
        futures: (
          <p>
            NSE: 0.00183% <br />
            BSE: 0
          </p>
        ),
        options: (
          <p>
            NSE: 0.03553% (on premium) <br />
            BSE: 0.0325% (on premium)
          </p>
        ),
      },
      {
        label: "GST",
        delivery: (
          <p>18% on (brokerage + SEBI charges + transaction charges)</p>
        ),
        intraday: (
          <p>18% on (brokerage + SEBI charges + transaction charges)</p>
        ),
        futures: <p>18% on (brokerage + SEBI charges + transaction charges)</p>,
        options: <p>18% on (brokerage + SEBI charges + transaction charges)</p>,
      },
      {
        label: "SEBI charges",
        delivery: <p> ₹10 / crore</p>,
        intraday: <p>₹10 / crore</p>,
        futures: <p> ₹10 / crore</p>,
        options: <p> ₹10 / crore</p>,
      },
      {
        label: "Stamp charges",
        delivery: <p> 0.015% or ₹1500 / crore on buy side</p>,
        intraday: <p>0.003% or ₹300 / crore on buy side</p>,
        futures: <p> 0.002% or ₹200 / crore on buy side</p>,
        options: <p> 0.003% or ₹300 / crore on buy side</p>,
      },
    ],
    Currency: [
      {
        label: "Brokerage",
        features: "	0.03% or ₹ 20/executed order whichever is lower",
        currencyOptions: "	₹ 20/executed order",
      },
      {
        label: "STT/CTT",
        features: "	No STT",
        currencyOptions: "No STT",
      },
      {
        label: "Transaction charges",
        features: (
          <p>
            NSE: 0.00035% <br />
            BSE: 0.00045%
          </p>
        ),
        currencyOptions: (
          <p>
            NSE: 0.00035% <br />
            BSE: 0.00045%
          </p>
        ),
      },
      {
        label: "GST",
        features: "	18% on (brokerage + SEBI charges + transaction charges)",
        currencyOptions:
          "18% on (brokerage + SEBI charges + transaction charges)",
      },
      {
        label: "SEBI charges",
        features: "₹10 / crore",
        currencyOptions: "₹10 / crore",
      },
      {
        label: "Stamp charges",
        features: "	0.0001% or ₹10 / crore on buy side",
        currencyOptions: "0.0001% or ₹10 / crore on buy side",
      },
    ],
    Commodity: [
      {
        label: "Brokerage",
        features: "	0.03% or ₹ 20/executed order whichever is lower",
        currencyOptions: "No STT",
      },
      {
        label: "STT/CTT",
        features: "0.01% on sell side (Non-Agri)",
        currencyOptions: "0.05% on sell side",
      },
      {
        label: "Transaction charges",
        features: (
          <p>
            MCX: 0.0021% <br />
            NSE: 0.0001%
          </p>
        ),
        currencyOptions: (
          <p>
            MCX: 0.0021% <br />
            NSE: 0.0001%
          </p>
        ),
      },
      {
        label: "GST",
        features: "	18% on (brokerage + SEBI charges + transaction charges)",
        currencyOptions:
          "18% on (brokerage + SEBI charges + transaction charges)",
      },
      {
        label: "SEBI charges",
        features: "	₹10 / crore",
        currencyOptions: "₹10 / crore",
      },
      {
        label: "Stamp charges",
        features: "	0.0001% or ₹10 / crore on buy side",
        currencyOptions: "0.0001% or ₹10 / crore on buy side",
      },
    ],
  };

  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="w-full flex flex-col gap-5 ">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-lg font-medium transition-colors duration-200 border-b-2 ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm">
                <th className="p-4  font-normal"></th>
                {tableHeads[activeTab]?.map((heads, idx) => (
                  <th key={idx} className="p-4 text-slate-900 font-normal">
                    {heads}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {pricingData[activeTab]?.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-500">{row.label}</td>
                  <td className="p-4 ">{row.delivery || row.features}</td>
                  <td className="p-4 ">
                    {row.intraday || row.currencyOptions}
                  </td>
                  <td className="p-4 ">{row.futures}</td>
                  <td className="p-4 ">{row.options}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-center text-xl mt-10">
          <Link className="text-blue-500">Calculate your costs upfront</Link> using our brokerage
          calculator
        </h2>
      </div>
    </section>
  );
};

export default Brokerage;
