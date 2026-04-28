import React, { useState } from "react";
import { Link } from "react-router-dom";



const Accordion = ({icon,title,list}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mb-5">
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="hover:scale-103 w-full     transition-scale duration-300 flex items-center bg-white border-2 rounded border-gray-100"
      >
        <span className="text-2xl font-light bg-sky-50 text-blue-500 flex justify-center py-4 px-4 items-center">
          <i class={`${icon}`}></i>
        </span>
        <div className="w-full flex justify-between p-4">
          <h2 className="text-slate-800 text-lg font-medium">
            {title}
          </h2>
          <i
            class={`text-2xl text-blue-600 font-medium ri-arrow-down-s-line transition-transform duration-300 ${
              toggle ? "rotate-0" : "rotate-180"
            }`}
          ></i>
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all ease-in-out border-2  text-blue-500  border-gray-100  ${toggle ? "grid-rows-[1fr] opacity-100 px-12 py-6" : "grid-rows-[0fr] opacity-0 px-12 py-0 "}`}
      >
        <div className="overflow-hidden">
          <ul className=" list-inside flex flex-col gap-5 list-disc">
            {
              list.map((item,idx) => (
                <li key={idx}>
                  <Link to={'#'}>{item}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
