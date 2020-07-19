// "use strict"
// The code in this file calculates grades based on the American grading system! 

function gradeCalculator(num) {
  let totalScore = 100;
  let scoreInPercentage = (num / totalScore) * 100; // This line convert the score into a percentage.
  if (scoreInPercentage >= 90 && scoreInPercentage <= 100) {
    console.log(`You got a A (${scoreInPercentage}%)!`);
  } else if (scoreInPercentage >= 80 && scoreInPercentage < 90) {
    console.log(`You got a B (${scoreInPercentage}%)!`);
  } else if (scoreInPercentage >= 70 && scoreInPercentage < 80) {
    console.log(`You got a C (${scoreInPercentage}%)!`);
  } else if (scoreInPercentage >= 60 && scoreInPercentage < 70) {
    console.log(`You got a D (${scoreInPercentage}%)!`);
  } else if (scoreInPercentage >= 50 && scoreInPercentage < 60) {
    console.log(`You got a E (${scoreInPercentage}%)!`);
  } else {
    console.log(`You got a F (${scoreInPercentage}%)!`);
  };
};

gradeCalculator(99);
gradeCalculator(89);
gradeCalculator(79);
gradeCalculator(69);
gradeCalculator(59);
gradeCalculator(49);
gradeCalculator(39);
gradeCalculator(29); /*the value should be 29% but it gives 28.999999999999996%, 
which is wrong because (29/100)*100 = 29 not 28.999999999999996,
same thing happen when you do that with these numbers(7,14,28,29,55,56,57,58,109,110,111,112,113,114,115,116.......)
you will get the correct result by changing the line 6 in this file to "let scoreInPercentage = (num * 100)/ totalScore;"*/
gradeCalculator(19);
gradeCalculator(09);
