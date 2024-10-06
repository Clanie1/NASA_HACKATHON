import React from "react";
import logo from "../../assets/common/Logo.svg";

const Navbar = ({ scrollToSection }) => {
  return (
    <div className="w-full h-[100px] bg-main-beige fixed top-0 flex justify-center items-center gap-20 select-none z-10">
      <span className="flex items-center gap-20">
        <span
          className="cursor-pointer hover:scale-110 tr hover:text-red-wine"
          onClick={() => scrollToSection("Home")}
        >
          Home
        </span>
        <span
          className="cursor-pointer hover:scale-110 tr hover:text-red-wine"
          onClick={() => scrollToSection("subs")}
        >
          Subscribe
        </span>
      </span>

      <span className="bg-main-beige p-4 rounded-full translate-y-[30%]">
        <img src={logo} className="w-[80px]" />
      </span>

      <span className="flex items-center gap-20">
        <span
          className="cursor-pointer hover:scale-110 tr hover:text-red-wine"
          onClick={() => scrollToSection("services")}
        >
          Services
        </span>
        <span
          className="cursor-pointer hover:scale-110 tr hover:text-red-wine"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </span>
      </span>
    </div>
  );
};

export default Navbar;
