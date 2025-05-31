import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Lists = ({ ext, isOpen }) => {
  const [toggle, setToggle] = useState(faToggleOn);

  const onToggle = () => {
    setToggle((prevToggle) =>
      prevToggle === faToggleOn ? faToggleOff : faToggleOn
    );
  };

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
        <button className="btns">Remove</button>
        <FontAwesomeIcon
          icon={toggle}
          className="toggle-on"
          onClick={onToggle}
        />
      </div>
    </div>
  );
};

export default Lists;
