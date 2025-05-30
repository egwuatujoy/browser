import React from "react";
import Lists from "./Lists";
import data from "../data.json";

const ExtensionList = ({ isOpen }) => {
  return (
    <div className="grid-container">
      {data.map((ext, index) => (
        <Lists key={index} ext={ext} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default ExtensionList;
