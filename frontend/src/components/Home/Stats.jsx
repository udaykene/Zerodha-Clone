import React from "react";
import { Link } from "react-router-dom";
const Stats = () => {
  const features = [
    {
      title: "Customer-first always",
      desc: "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.",
    },
    {
      title: "No spam or gimmicks",
      desc: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
    },
    {
      title: "The Zerodha universe",
      desc: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      desc: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="flex w-full flex-col gap-10 p-4 md:flex-row md:items-start">
        <div className="w-full md:w-1/2">
          <h1 className="mb-12 text-4xl font-semibold text-slate-900">
            Trust with confidence
          </h1>
          <div className="flex flex-col gap-8">
            {features.map((items, idx) => (
              <div className="" key={idx}>
                <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                  {items.title}
                </h2>
                <p className="max-w-[80%] text-gray-500">{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/ecosystem.png"
            alt="Zerodha ecosystem illustration"
            className="h-auto w-full"
          />
          <div className="flex justify-center gap-10 mt-2 text-blue-600">
            <Link className="flex gap-1 items-center hover:underline" to="/">
              Explore our products<i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link className="flex gap-1 items-center hover:underline" to="/">
              Try kite demo<i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
