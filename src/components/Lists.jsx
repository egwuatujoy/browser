import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Lists = ({ ext, isOpen, onToggle, removeList }) => {
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
        <button
          className={`btns  ${isOpen ? "remove-btn" : ""} `}
          onClick={() => removeList(ext.id)}
        >
          Remove
        </button>
        <FontAwesomeIcon
          icon={ext.isActive ? faToggleOn : faToggleOff}
          className="toggle-on"
          onClick={() => onToggle(ext.id)}
        />
      </div>
    </div>
  );
};

export default Lists;
