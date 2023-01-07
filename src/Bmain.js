import React from "react";
import "./Bmain.css";
import Cube from "./Cube.js";
import Tbar from "./Tbar";

export default function Bmain() {
  return (
    <div className="main">
      <div className="main_1">
        <div className="content_1">
          <h2>Book from </h2>{" "}
        </div>
        <div class="dropdown">
          <select style={main_style}>
            <option>
              <font>San Francisco </font>
            </option>
            <option>San Diego </option>
            <option>Chicago</option>
          </select>
        </div>
        <h2> to</h2>
      </div>
      <div className="main_2">
        <Cube name="LAS VEGAS" s="NV" short_form="LAS" />
        <Cube name="LOS ANGELES" s="CA" short_form="LAX" />
        <Cube name="NEW YORK CITY" s="NY" short_form="NYC" />
        <Cube name="PALM SPRINGS" s="CA" short_form="PSP" />
        <Cube name="PORTLAND" s="OR" short_form="PDX" />
        <Cube name="ALL CITIES" />
      </div>
      <div>
        <Tbar />
      </div>
    </div>
  );
}

const main_style = {
  border: "none",
  color: "#932dad"
};

// &#8964;
