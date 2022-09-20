

// 8 Kg / (1,66 m x 1,66 m) = 35,6        BMI-Calculator

let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let IMC = document.querySelector("#text");
let SPAN = document.querySelector("span");

function span() {
  document.querySelector("span").style.display = "none";
  document.querySelector("div").style.display = "block";
}

button.addEventListener("click", function () {
  let poids = Number(inputs[1].value);
  let taille = Number(inputs[0].value) / 100;
  let bmi = (poids / (taille * taille)).toPrecision(4);

  IMC.textContent = bmi;
  inputs[0].value = "";
  inputs[1].value = "";

  let BMIg = document.querySelector("#BMIg");
  if (bmi < 18.6) {
    BMIg.textContent = "Under Weight";
    BMIg.style.color = "red";
  } else if (bmi > 18.6 && bmi < 24.9) {
    BMIg.textContent = "Normal Range";
    BMIg.style.color = "green";
  } else if (bmi > 24.9) {
    BMIg.textContent = "Overweight";
    BMIg.style.color = "blue";
  }
});
