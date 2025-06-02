import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import data from "./data.json";

const App = () => {
  const [theData, setData] = useState(data);
  const [isOpen, setOpen] = useState(false);

  const toggleBg = () => {
    setOpen(!isOpen);
  };

  const onToggle = (id) => {
    setData((prevData) =>
      prevData.map((data) =>
        data.id === id ? { ...data, isActive: !data.isActive } : data
      )
    );
  };

  const removeList = (id) => {
    console.log(id);
    setData((prevData) => prevData.filter((data) => data.id !== id));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [isOpen]);

  return (
    <div className="app">
      <Header toggleBg={toggleBg} isOpen={isOpen} />
      <NavBar
        isOpen={isOpen}
        onToggle={onToggle}
        data={theData}
        removeList={removeList}
      />
    </div>
  );
};

export default App;
