import React from "react";
import "./Radiob.css";
export default function Radiob() {
  return (
    <div className="second">
      <div>
        <input
          type="radio"
          id="my-radio"
          name="drone"
          value="Round_Trip"
          checked
        />
        <label for="Round_Trip">Round Trip</label>
      </div>

      <div>
        <input type="radio" id="my-radio" name="drone" value="One_Way" />
        <label for="One Way">One Way</label>
      </div>

      <div>
        <input type="radio" id="my-radio" name="drone" value="Multi_City" />
        <label for="Multi_City">Multi City</label>
      </div>
    </div>
  );
}
