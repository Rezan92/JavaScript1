// "use strict"
// The code in this file calculates grades based on the American grading system! 

function gradeCalculator(num) {
  let totalScore = 100;
  let scoreInPercentage = (num *100)/ totalScore; // This line convert the score into a percentage.
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
gradeCalculator(29); 
gradeCalculator(19);
gradeCalculator(09);
