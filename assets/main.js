const distanceArea = document.querySelector("#distance");
const convertBtn = document.querySelector(".convert-btn");
const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const resultArea = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btn");
let result = 0;

convertBtn.addEventListener("click", () => {
  if(distanceArea.value == "") {
    alert("Please enter a value to convert");
  }
  // from km
  if (selectFrom.value == "km" && selectTo.value == "km" ) {
    alert("Please choose units to convert");
  }
  else if (selectFrom.value == "km" && selectTo.value == "hm" ) {
    result = (distanceArea.value * 10 + " hm");
  }
  else if (selectFrom.value == "km" && selectTo.value == "dam" ) {
    result = (distanceArea.value * 100 + " dam");
  }
  else if (selectFrom.value == "km" && selectTo.value == "m" ) {
    result = (distanceArea.value * 1000 + " m");
  }
  else if (selectFrom.value == "km" && selectTo.value == "dm" ) {
    result = (distanceArea.value * 10000 + " dm");
  }
  else if (selectFrom.value == "km" && selectTo.value == "cm" ) {
    result = (distanceArea.value * 100000 + " cm");
  }
  else if (selectFrom.value == "km" && selectTo.value == "mm" ) {
    result = (distanceArea.value * 1000000 + " mm");
  }


  // from hm
  if (selectFrom.value == "hm" && selectTo.value == "hm" ) {
    alert("Please choose units to convert");
  }
  else if (selectFrom.value == "hm" && selectTo.value == "km" ) {
    result = (distanceArea.value / 10 + " km");
  }
  else if (selectFrom.value == "hm" && selectTo.value == "dam" ) {
    result = (distanceArea.value * 10 + " dam");
  }
  else if (selectFrom.value == "hm" && selectTo.value == "m" ) {
    result = (distanceArea.value * 100 + " m");
  }
  else if (selectFrom.value == "hm" && selectTo.value == "dm" ) {
    result = (distanceArea.value * 1000 + " dm");
  }
  else if (selectFrom.value == "hm" && selectTo.value == "cm" ) {
    result = (distanceArea.value * 10000 + " cm");
  }
  else if (selectFrom.value == "hm" && selectTo.value == "mm" ) {
    result = (distanceArea.value * 100000 + " mm");
  }

  // from dam
  if (selectFrom.value == "dam" && selectTo.value == "dam" ) {
    alert("Please choose units to convert");
  }
  else if (selectFrom.value == "dam" && selectTo.value == "km" ) {
    result = (distanceArea.value / 100 + " km");
  }
  else if (selectFrom.value == "dam" && selectTo.value == "hm" ) {
    result = (distanceArea.value / 10 + " hm");
  }
  else if (selectFrom.value == "dam" && selectTo.value == "m" ) {
    result = (distanceArea.value * 10 + " m");
  }
  else if (selectFrom.value == "dam" && selectTo.value == "dm" ) {
    result = (distanceArea.value * 100 + " dm");
  }
  else if (selectFrom.value == "dam" && selectTo.value == "cm" ) {
    result = (distanceArea.value * 1000 + " cm");
  }
  else if (selectFrom.value == "dam" && selectTo.value == "mm" ) {
    result = (distanceArea.value * 10000 + " mm");
  }

  // from dm
  if (selectFrom.value == "dm" && selectTo.value == "dm" ) {
    alert("Please choose units to convert");
  }
  else if (selectFrom.value == "dm" && selectTo.value == "km" ) {
    result = (distanceArea.value / 10000 + " km");
  }
  else if (selectFrom.value == "dm" && selectTo.value == "hm" ) {
    result = (distanceArea.value / 1000 + " hm");
  }
  else if (selectFrom.value == "dm" && selectTo.value == "dam" ) {
    result = (distanceArea.value / 100 + " dam");
  }
  else if (selectFrom.value == "dm" && selectTo.value == "m" ) {
    result = (distanceArea.value / 10 + " m");
  }
  else if (selectFrom.value == "dm" && selectTo.value == "cm" ) {
    result = (distanceArea.value * 10 + " cm");
  }
  else if (selectFrom.value == "dm" && selectTo.value == "mm" ) {
    result = (distanceArea.value * 100 + " mm");
  }

  // from m
  if (selectFrom.value == "m" && selectTo.value == "m" ) {
    alert("Please choose units to convert");
  }
  else if (selectFrom.value == "m" && selectTo.value == "km" ) {
    result = (distanceArea.value / 1000 + " km");
  }
  else if (selectFrom.value == "m" && selectTo.value == "hm" ) {
    result = (distanceArea.value / 100 + " hm");
  }
  else if (selectFrom.value == "m" && selectTo.value == "dam" ) {
    result = (distanceArea.value / 10 + " dam");
  }
  else if (selectFrom.value == "m" && selectTo.value == "dm" ) {
    result = (distanceArea.value * 10 + " dm");
  }
  else if (selectFrom.value == "m" && selectTo.value == "cm" ) {
    result = (distanceArea.value * 100 + " cm");
  }
  else if (selectFrom.value == "m" && selectTo.value == "mm" ) {
    result = (distanceArea.value * 1000 + " mm");
  }

  // from cm
  if (selectFrom.value == "cm" && selectTo.value == "cm" ) {
    alert("Please choose units to convert");
  }
  else if (selectFrom.value == "cm" && selectTo.value == "km" ) {
    result = (distanceArea.value / 100000 +" km");
  }
  else if (selectFrom.value == "cm" && selectTo.value == "hm" ) {
    result = (distanceArea.value / 10000 + " hm");
  }
  else if (selectFrom.value == "cm" && selectTo.value == "dam" ) {
    result = (distanceArea.value / 1000 + " dam");
  }
  else if (selectFrom.value == "cm" && selectTo.value == "m" ) {
    result = (distanceArea.value / 100 + " m");
  }
  else if (selectFrom.value == "cm" && selectTo.value == "dm" ) {
    result = (distanceArea.value / 10 + " dm");
  }
  else if (selectFrom.value == "cm" && selectTo.value == "mm" ) {
    result = (distanceArea.value * 10 + " mm");
  }

  // from mm
  if (selectFrom.value == "mm" && selectTo.value == "mm" ) {
    alert("Please choose units to convert");
  }
  else if (selectFrom.value == "mm" && selectTo.value == "km" ) {
    result = (distanceArea.value / 1000000 + " km");
  }
  else if (selectFrom.value == "mm" && selectTo.value == "hm" ) {
    result = (distanceArea.value / 100000 + " hm");
  }
  else if (selectFrom.value == "mm" && selectTo.value == "dam" ) {
    result = (distanceArea.value / 10000 + " dam");
  }
  else if (selectFrom.value == "mm" && selectTo.value == "m" ) {
    result = (distanceArea.value / 1000 + " m");
  }
  else if (selectFrom.value == "mm" && selectTo.value == "dm" ) {
    result = (distanceArea.value / 100 + " dm");
  }
  else if (selectFrom.value == "mm" && selectTo.value == "cm" ) {
    result = (distanceArea.value / 10 + " cm");
  }
  resultArea.innerHTML = result;
})

// reset button
resetBtn.addEventListener("click", () => {
  document.querySelector(".fa-arrow-rotate-right").classList.toggle("reset-arrow-rotate");
  distanceArea.value = "";
  resultArea.innerHTML = "";
})


