import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    /* Added 'mt-auto' and ensured parent container (usually in App.js) has 'flex flex-col min-h-screen' */
    <footer className="w-full bg-gray-50 pt-6 border-t border-gray-200 mt-auto">
      <section className="mx-auto w-full max-w-7xl px-4 py-8">
        {/* Changed to 'flex-col' for mobile and 'lg:flex-row' for desktop */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-0">
          
          {/* Adjusted width to be full on mobile, 30% on desktop */}
          <div className="w-full lg:w-[30%] lg:mr-20 flex flex-col gap-6">
            <Link to={'/'}>
              <img className="w-40" src="/logo.svg" alt="Logo" />
            </Link>
            <p className="text-slate-600">2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
            <div className="icons flex text-2xl text-slate-500 gap-2">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/* Wrapper for links: grid layout for mobile responsiveness */}
          <div className="w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-8 lg:flex lg:justify-between">
            <div className="text-lg flex flex-col gap-4">
              <h4 className="font-medium">Company</h4>
              <ul className="text-slate-600 flex flex-col gap-2 lg:gap-4">
                <li>About</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Referral programme</li>
                <li>Carrers</li>
                <li>Zerodha.tech</li>
                <li>Press & media</li>
                <li>Zerodha cares (CSR)</li>
              </ul>
            </div>
            
            <div className="text-lg flex flex-col gap-4">
              <h4 className="font-medium">Support</h4>
              <ul className="text-slate-600 flex flex-col gap-2 lg:gap-4">
                <li>Contact</li>
                <li>Support portal</li>
                <li>Z-connect blog</li>
                <li>List of charges</li>
                <li>Download & resources</li>
              </ul>
            </div>

            <div className="text-lg flex flex-col gap-4">
              <h4 className="font-medium">Account</h4>
              <ul className="text-slate-600 flex flex-col gap-2 lg:gap-4">
                <li>Open an account</li>
                <li>Fund transfer</li>
                <li>60 day challenge</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </footer>
  );
};

export default Footer;