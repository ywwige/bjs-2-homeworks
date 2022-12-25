"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let vD = Math.sqrt(bb-4ac)
  let [r1, r2a, r2b] = [-b/(2a), (-b+vD)/(2a), (-b-vD)/(2a)];

  if (vD == 0) arr = r1;
  if (vD > 0)  arr = r2a + ', ' r2b;
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}