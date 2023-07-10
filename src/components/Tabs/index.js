import React, { useState } from "react";
import "./tab.css";

const Tab = ({ setMostrar }) => {
  const [select, setSelect] = useState(0);
  const handleClick = (selected) => {
    setSelect(selected);
    setMostrar(selected);
  };
  return (
    <div className="tabsContainer">
      <div className={`tab `}>
        <p onClick={() => handleClick(0)}>
          <h5 className={`h5 ${select === 0 ? " activeTab" : ""}`}>
            HERMETISMO
          </h5>
        </p>
      </div>
      <div className={`tab`}>
        <p onClick={() => handleClick(1)}>
          <h5 className={`h5 ${select === 1 ? " activeTab" : ""}`}>ARTE</h5>
        </p>
      </div>

      <div className={`tab`}>
        <p onClick={() => handleClick(2)}>
          <h5 className={`h5 ${select === 2 ? " activeTab" : ""}`}>
            PROMOCIONES
          </h5>
        </p>
      </div>
    </div>
  );
};

export default Tab;
