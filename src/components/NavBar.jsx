import React, { useState } from "react";
import ExtensionList from "./ExtensionList";

const NavBar = ({ isOpen, onToggle, data, removeList }) => {
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

  const selectedBtn = (btn, e) => {
    setActive(btn);
    setSortBy(e.target.innerHTML);
  };
  console.log(sortedItems);
  return (
    <>
      <div className="navs">
        <h1 className={`${isOpen ? "open-h1" : ""}`}>Extensions List</h1>
        <div className="buttons">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={(e) => selectedBtn(btn, e)}
              className={`${
                isActive === btn && isOpen
                  ? "actives"
                  : isActive === btn
                  ? "active-btn"
                  : "active"
              }  btnss ${isOpen ? "remove-btn" : ""}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <ExtensionList
        isOpen={isOpen}
        data={sortedItems}
        onToggle={onToggle}
        removeList={removeList}
      />
    </>
  );
};

export default NavBar;

