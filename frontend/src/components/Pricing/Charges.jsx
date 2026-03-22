import React from "react";
import { Link, Links } from "react-router-dom";

const Charges = () => {
  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="w-full flex flex-col gap-20 ">
        <div>
          <h2 className="text-2xl mb-5">Charges for account opening</h2>
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="border-collapse border border-gray-200">
              <tr className="bg-gray-50 table-row    text-gray-600 text-sm">
                <th className="p-4 text-slate-900 font-normal">
                  Type of account
                </th>
                <th className="p-4 text-slate-900 font-normal">Charges</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">Online account</td>
                <td className="p-4 ">
                  <span className="bg-green-600 text-sm px-2 rounded-sm text-white">
                    FREE
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">Offline account</td>
                <td className="p-4 ">
                  <span className="bg-green-600 text-sm px-2 rounded-sm text-white">
                    FREE
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">NRI account (offline only)</td>
                <td className="p-4 ">₹ 500</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="p-4 ">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl mb-5">
            Demat AMC (Annual Maintenance Charge)
          </h2>
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="border-collapse border align-middle table-header-group  border-gray-200">
              <tr className="bg-gray-50 table-row    text-gray-600 text-sm">
                <th className="p-4 text-slate-900 font-normal">
                  Value of holdings
                </th>
                <th className="p-4 text-slate-900 font-normal">AMC</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 table-row-group text-sm">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 "> Up to ₹4 lakh</td>
                <td className="p-4 ">
                  <span className="bg-green-600 text-sm px-2 rounded-sm text-white">
                    FREE
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">₹4 lakh - ₹10 lakh</td>
                <td className="p-4 ">₹ 100 per year, charged quarterly</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">Above ₹10 lakh</td>
                <td className="p-4 ">₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[0.80rem] mt-4">
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account. To learn more about BSDA,{" "}
            <Link to={"/"} className="text-blue-600">
              click here
            </Link>
          </p>
        </div>
        <div>
          <h2 className="text-2xl mb-5">
            Charges for optional value added services
          </h2>
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="border-collapse border align-middle table-header-group  border-gray-200">
              <tr className="bg-gray-50 table-row    text-gray-600 text-sm">
                <th className="p-4 text-slate-900 font-normal">Service</th>
                <th className="p-4 text-slate-900 font-normal">
                  Billing Frquency
                </th>
                <th className="p-4 text-slate-900 font-normal">Charges</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 table-row-group text-sm">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 "> Tickertape</td>
                <td className="p-4 ">Monthly / Annual</td>
                <td className="p-4">Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">Smallcase</td>
                <td className="p-4 ">Per transaction</td>
                <td className="p-4 ">Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 ">Kite Connect</td>
                <td className="p-4 ">Monthly</td>
                <td className="p-4 ">Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="charges">
          <h2 className="text-2xl mb-5">Charges explained</h2>
          <div className="charges text-slate-800 flex gap-10 w-full">
            <div className=" w-1/2">
              <p className="">Securities/Commodities transaction tax</p>
              <p className="p-small">
                Tax by the government when transacting on the exchanges. Charged
                as above on both buy and sell sides when trading equity
                delivery. Charged only on selling side when trading intraday or
                on F&O.
              </p>
              <p className="p-small">
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>
              <p>Transaction/Turnover Charges</p>
              <p className="p-small">
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
              </p>
              <p className="p-small">
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
                have been merged into a new group X w.e.f 01.12.2017)
              </p>
              <p className="p-small">
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
              </p>
              <p className="p-small">
                BSE has revised transaction charges for group A, B and other non
                exclusive scrips (non-exclusive scrips from group E, F, FC, G,
                GC, W, T) at ₹375 per crore of turnover on flat rate basis
                w.e.f. December 1, 2022.
              </p>
              <p className="p-small">
                BSE has revised transaction charges in M, MT, TS and MS groups
                to ₹275 per crore of gross turnover.
              </p>
              <p>Call & trade</p>
              <p className="p-small">
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </p>
              <p>Stamp charges</p>
              <p className="p-small">
                Stamp charges by the Government of India as per the Indian Stamp
                Act of 1899 for transacting in instruments on the stock
                exchanges and depositories.
              </p>
              <p>NRI brokerage charges</p>
              <p>
                <ul className="list-disc px-4">
                  <li className="p-small">
                    For a non-PIS account, 0.5% or ₹50 per executed order for
                    equity and F&O (whichever is lower).
                  </li>
                  <li className="p-small">
                    For a PIS account, 0.5% or ₹200 per executed order for
                    equity (whichever is lower).
                  </li>
                  <li className="p-small">
                    ₹500 + GST as yearly account maintenance charges (AMC)
                    charges.
                  </li>
                </ul>
              </p>

              <p>Account with debit balance</p>
              <p className="p-small">
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </p>
              <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
              <p className="p-small">
                <ul className="list-disc px-4">
                  <li>
                    Equity and Futures - ₹0.01 per crore + GST of the traded
                    value.
                  </li>
                  <li>
                    Options - ₹0.01 per crore + GST traded value (premium
                    value).
                  </li>
                  <li>
                    Currency - ₹0.05 per lakh + GST of turnover for Futures and
                    ₹2 per lakh + GST of premium for Options.
                  </li>
                </ul>
              </p>
              <p>Margin Trading Facility (MTF)</p>
              <p className="p-small">
                <ul className="list-disc px-4">
                  <li>
                    MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                    amount. The interest is applied from T+1 day until the day
                    MTF stocks are sold.
                  </li>
                  <li>
                    MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                    lower.
                  </li>
                  <li>
                    MTF pledge charge: ₹15 + GST per pledge and unpledge request
                    per ISIN.
                  </li>
                </ul>
              </p>
            </div>
            <div className="w-1/2">
              <p>GST</p>
              <p className="p-small">
                Tax levied by the government on the services rendered. 18% of (
                brokerage + SEBI charges + transaction charges)
              </p>
              <p>SEBI Charges</p>
              <p className="p-small">
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating the markets.
              </p>
              <p>DP (Depository participant) charges</p>
              <p className="p-small">
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
                is charged on the trading account ledger when stocks are sold,
                irrespective of quantity.
              </p>
              <p className="p-small">
                Female demat account holders (as first holder) will enjoy a
                discount of ₹0.25 per transaction on the CDSL fee.
              </p>
              <p className="p-small">
                Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </p>
              <p>Pledging charges</p>
              <p className="p-small">₹30 + GST per pledge request per ISIN.</p>
              <p>AMC (Account maintenance charges)</p>
              <p className="p-small">
                For BSDA demat account: Zero charges if the holding value is
                less than ₹4,00,000. To learn more about BSDA,{" "}
                <Link
                  className="text-blue-500"
                  to={
                    "https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha"
                  }
                >
                  Click here
                </Link>
              </p>
              <p className="p-small">
                For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days). To learn more about AMC,
                <Link
                  className="text-blue-500"
                  to={
                    "https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge"
                  }
                >
                  Click here
                </Link>
              </p>
              <p>Corporate action order charges</p>
              <p className="p-small">
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting orders placed through Console.
              </p>
              <p>Off-market transfer charges</p>
              <p className="p-small">₹25 per transaction.</p>
              <p>Physical CMR request</p>
              <p className="p-small">
                First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
                for subsequent requests.
              </p>
              <p>Payment gateway charges</p>
              <p className="p-small">
                ₹9 + GST (Not levied on transfers done via UPI)
              </p>
              <p>Delayed Payment Charges</p>
              <p className="p-small">
                Interest is levied at 18% a year or 0.05% per day on the debit
                balance in your trading account.{" "}
                <Link
                  className="text-blue-500"
                  to={
                    "https://support.zerodha.com/category/console/ledger/articles/interest-charges"
                  }
                >
                  Learn more
                </Link>
              </p>
              <p>Trading using 3-in-1 account with block functionality</p>
              <ul className="p-small list-disc px-4">
                <li>
                  <b>Delivery & MTF Brokerage:</b> 0.5% per executed order.
                </li>
                <li>
                  <b>Intraday Brokerage:</b> 0.05% per executed order.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-slate-800">Disclaimer</p>
          <p className="text-slate-800 p-small">
                For Delivery based trades, a minimum of ₹0.01 will be charged per contract note.
                Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier
                charges.
                Brokerage will not exceed the rates specified by SEBI and the exchanges.
                All statutory and regulatory charges will be levied at actuals.
                Brokerage is also charged on expired, exercised, and assigned options contracts.
                Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts,
                and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Charges;
