"use client";
import React, { useEffect, useState } from "react";
import "./financeBar.css";

function FinanceBar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/finance")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="finance-bar">
      {items.map((item, index) => (
        <div key={index} className="finance-item">
          <span className="name">{item.name}</span>
          <span className="value">{item.value}</span>
          <span className={`change ${item.color}`}>{item.change}</span>
        </div>
      ))}
    </div>
  );
}

export default FinanceBar;
