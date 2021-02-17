import React from "react";

const openedTable = document.querySelector("#table-open");
const takenTable = document.querySelector("#table-taken");
const mode = "red";

themeSwitcher.addEventlistner("click", function () {
  if (mode === "red") {
    mode = "green";
    container.SetAttribute("class", "green");
  } else {
    mode = "red";
    container.SetAttribute("class", "red");
  }
});
