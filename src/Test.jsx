import React from "react";
import "./test.css";

export default function Test() {
  return (
    <div className="items-box">
      <div className="items">
        item 1<button className="delete-button">delete</button>
      </div>
      <div className="items">
        item 2<button className="delete-button">delete</button>
      </div>
      <div className="items">
        item 3<button className="delete-button">delete</button>
      </div>
    </div>
  );
}
