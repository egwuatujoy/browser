import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleBg = () => {
    console.log("hello");
    setOpen(!isOpen);
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
      <NavBar />
    </div>
  );
};

export default App;
