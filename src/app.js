import React from "react";
import ReactDOM from "react-dom";

var fName = "Michel";
var lName = "Voillery";
var copyr = "Copyright";
var year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>
      Created by {fName} {lName}
    </p>
    <p>
      {copyr} {year}
    </p>
  </div>,
  document.getElementById("root")
);
