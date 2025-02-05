// example statudent notation (notationOne + notationTwo + notationThree)

let notationOne = 5;
let notationTwo = 10;
let notationThree = 7;

let result = (notationOne + notationTwo + notationThree) / 3;

// result <= 5 === failed
// result >= 6  <= 8 === passed
// result > 8 <= 10 === excelent student

if (result <= 5) {
  console.log("failed");
} else if (result >= 6 && result <= 8) {
  console.log("passed");
} else {
  console.log("excelent student");
}
