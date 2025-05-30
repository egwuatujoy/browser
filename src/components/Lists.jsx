import React from "react";

const Lists = ({ ext, isOpen }) => {
  console.log(isOpen);
  return (
    <div className={`extension-div ${isOpen ? "bg-color" : ""}`}>
      <div className="extension-details">
        <img src={ext.logo} alt={ext.name} />
        <div>
          <h2 className={`${isOpen ? "open-h1" : ""}`}>{ext.name}</h2>
          <p className={`${isOpen ? "open-description" : ""}`}>
            {ext.description}
          </p>
        </div>
      </div>

      <div className="buttons">
        <button className={`${isOpen ? "open-active" : ""}`}>Remove</button>
        <button>.</button>
      </div>
    </div>
  );
};

export default Lists;
