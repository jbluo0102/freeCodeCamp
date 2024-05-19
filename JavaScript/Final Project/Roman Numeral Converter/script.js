// Roman numerals	Arabic numerals
// M	            1000
// CM	            900
// D	            500
// CD	            400
// C	            100
// XC	            90
// L	            50
// XL	            40
// X	            10
// IX	            9
// V	            5
// IV	            4
// I	            1

const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const div = document.getElementById("output");

button.addEventListener("click", checkUserInput);

function checkUserInput(event) {
  const inputInt = parseInt(input.value);
  if (isNaN(inputInt)) {
    div.innerText = "Please enter a valid number";
    return;
  }

  if (inputInt < 1) {
    div.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt > 3999) {
    div.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNum = convertToRoman(inputInt);
  div.innerText = romanNum;
}

function convertToRoman(num) {
  let romanNum = "";
  while (num >= 1000) {
    romanNum += "M";
    num -= 1000;
  }
  while (num >= 900) {
    romanNum += "CM";
    num -= 900;
  }
  while (num >= 500) {
    romanNum += "D";
    num -= 500;
  }
  while (num >= 400) {
    romanNum += "CD";
    num -= 400;
  }
  while (num >= 100) {
    romanNum += "C";
    num -= 100;
  }
  while (num >= 90) {
    romanNum += "XC";
    num -= 90;
  }
  while (num >= 50) {
    romanNum += "L";
    num -= 50;
  }
  while (num >= 40) {
    romanNum += "XL";
    num -= 40;
  }
  while (num >= 10) {
    romanNum += "X";
    num -= 10;
  }
  while (num >= 9) {
    romanNum += "IX";
    num -= 9;
  }
  while (num >= 5) {
    romanNum += "V";
    num -= 5;
  }
  while (num >= 4) {
    romanNum += "IV";
    num -= 4;
  }
  while (num >= 1) {
    romanNum += "I";
    num -= 1;
  }
  return romanNum;
}
