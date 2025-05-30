import React from "react";

const Lists = ({ ext, isOpen }) => {
  return (
    <div className={`extension-div ${isOpen ? "bg-color" : ""}` }>
      <div className="extension-details">
        <img src={ext.logo} alt={ext.name} />
        <div>
          <h2>{ext.name}</h2>
          <p>{ext.description}</p>
        </div>
      </div>

      <div className="buttons">
        <button>Remove</button>
        <button>.</button>
      </div>
    </div>
  );
};

export default Lists;
