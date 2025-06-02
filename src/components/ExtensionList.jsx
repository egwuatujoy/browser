import React from "react";
import Lists from "./Lists";

const ExtensionList = ({ isOpen, data, onToggle, removeList }) => {
  return (
    <div className="grid-container">
      {data.map((ext, index) => (
        <Lists
          key={index}
          ext={ext}
          isOpen={isOpen}
          onToggle={onToggle}
          removeList={removeList}
        />
      ))}
    </div>
  );
};

export default ExtensionList;
