import React, { useState } from "react";

const Header = ({ toggleBg, isOpen }) => {
  return (
    <div className={`header ${isOpen ? "bg-color " : ""}`}>
      <img src="/images/logo.svg" alt="logo-icon" />
      <img
        src={` ${isOpen ? "/images/icon-moon.svg " : "/images/icon-sun.svg"}`}
        alt="sun-icon"
        className={`sun-icon ${isOpen ? "moon-icon" : ""}`}
        onClick={toggleBg}
      />
    </div>
  );
};

export default Header;
