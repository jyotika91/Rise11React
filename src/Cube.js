import React from "react";
import "./Cube.css";
export default function Cube(porps) {
  return (
    <div className="block">
      <div className="m_content">
        <h6 style={{ color: "#932dad" }}>{porps.name}</h6>
        <h6>
          {porps.s} ({porps.short_form})
        </h6>
        {porps.childern}
      </div>
    </div>
  );
}
