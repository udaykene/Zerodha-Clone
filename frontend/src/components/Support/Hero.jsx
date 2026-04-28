import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full mb-14 bg-mist-100">
      <section className="mx-auto mb-10   w-full max-w-7xl px-4">
        <div className="flex py-10 text-gray-700 justify-between ">
          <h2 className="text-4xl font-bold">Support Portal</h2>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded font-medium"
            to={"/"}
          >
            My tickets
          </Link>
        </div>
        <input
          type="text"
          className="w-full bg-white px-6 py-4 border-2 border-gray-200"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
        />
      </section>
    </section>
  );
};

export default Hero;
