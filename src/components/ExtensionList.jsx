import React from "react";
import Lists from "./Lists";

const ExtensionList = ({ isOpen, data }) => {
  return (
    <div className="grid-container">
      {data.map((ext, index) => (
        <Lists key={index} ext={ext} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default ExtensionList;
