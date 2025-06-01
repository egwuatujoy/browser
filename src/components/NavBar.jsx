import React, { useState } from "react";
import ExtensionList from "./ExtensionList";
import data from "../data.json";

const NavBar = ({ isOpen }) => {
  const buttons = ["All", "Active", "Inactive"];

  const [isActive, setActive] = useState();
  const [sortBy, setSortBy] = useState("All");

  let sortedItems;
  if (sortBy === "All") sortedItems = data;

  if (sortBy === "Active")
    sortedItems = data.filter((da) => da.isActive === true);

  if (sortBy === "Inactive") {
    sortedItems = data.filter((da) => da.isActive === false);
  }
  console.log(sortedItems);

  const selectedBtn = (btn, e) => {
    setActive(btn);
    setSortBy(e.target.innerHTML);
  };

  return (
    <>
      <div className="navs">
        <h1 className={`${isOpen ? "open-h1" : ""}`}>Extensions List</h1>
        <div className="buttons">
          {buttons.map((btn) => (
            <button
              onClick={(e) => selectedBtn(btn, e)}
              className={`${isActive === btn ? "active-btn" : ""} ${
                isOpen ? "open-active" : ""
              } btnss`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <ExtensionList isOpen={isOpen} data={sortedItems} />
    </>
  );
};

export default NavBar;
