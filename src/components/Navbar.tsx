import React from "react";
import { navData } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full bg-navbarBg h-20 flex">
      <ul className="flex items-center justify-center mx-auto gap-8 text-primary text-2xl ">
        {navData.map((item) => (
          <li key={item.title} className=" uppercase">
            {item.title}: <span className="text-white">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

