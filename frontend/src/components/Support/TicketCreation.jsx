import React from "react";
import Accordion from "../Accordion.jsx";

const accordionData = [
  {
    icon: "ri-add-circle-line",
    title: "Account Opening",
    list: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    icon: "ri-account-circle-line",
    title: "Your Zerodha Account",
    list: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    icon: "ri-logout-circle-line",
    title: "Kite",
    list: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    icon: "ri-money-rupee-circle-line",
    title: "Funds",
    list: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    icon: "ri-xbox-line",
    title: "Console",
    list: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    icon: "ri-coin-line",
    title: "Coin",
    list: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

const TicketCreation = () => {
  return (
    <section className="mx-auto mb-10 flex gap-10 w-full max-w-7xl px-4">
      {/* left */}
      <section className="w-5/7">
        {accordionData.map((item,idx) => (
          <Accordion 
          key={idx}
          icon={item.icon}
          title={item.title}
          list={item.list}
          />
        ))}
      </section>
      {/* right */}
      <section className="w-2/7 bg-blue-500">dsads</section>
    </section>
  );
};

export default TicketCreation;
