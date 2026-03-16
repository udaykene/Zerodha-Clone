import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const aboutData = [
    [
      {
        id: 1,
        content:
          'We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.',
      },
      {
        id: 2,
        content:
          "Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.",
      },
      {
        id: 3,
        content:
          "Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.",
      },
    ],
    [
      {
        id: 1,
        content: (
          <>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </>
        ),
      },
      {
        id: 2,
        content: (
          <>
            <Link className="text-blue-600 hover:underline" to="/">
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </>
        ),
      },
      {
        id: 3,
        content: (
          <>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link className="text-blue-600 hover:underline" to="/">
              blog
            </Link>{" "}
            or see what the media is{" "}
            <Link className="text-blue-600 hover:underline" to="/">
              saying about us
            </Link>{" "}
            or learn more about our business and product{" "}
            <Link className="text-blue-600 hover:underline" to="/">
              philosophies
            </Link>
            .
          </>
        ),
      },
    ],
  ];

  return (
    <section className="mx-auto mb-10 w-full max-w-7xl px-4">
      <div className="flex py-25 items-center justify-center border-b-1 border-gray-200 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="w-full pt-25 flex justify-center gap-10 text-[#424242]  ">
        <div className="flex w-[40%] flex-col ">
          {aboutData[0].map((item) => (
            <p key={item.id} className="mt-4 leading-[1.8] text-[18px] mb-3.5">
              {item.content}
            </p>
          ))}
        </div>
        <div className="flex w-[40%] flex-col ">
          {aboutData[1].map((item) => (
            <p key={item.id} className="mt-4 leading-[1.8] text-[18px] mb-3.5">
              {item.content}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
