import React, { useState } from "react";

const NavBar = ({ isOpen }) => {
  const buttons = ["All", "Active", "Inactive"];

  const [isActive, setActive] = useState();

  return (
    <div className="navs">
      <h1 className={`${isOpen ? "open-h1" : ""}`}>Extensions List</h1>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            onClick={() => setActive(btn)}
            className={isActive === btn ? "active-btn" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
