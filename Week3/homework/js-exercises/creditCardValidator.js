"use strict"

function validateCreditNumber(numbers) {
  let number = numbers.toString(); // to check the length of the input
  const charactersArray = []; // this array will contain the input characters.
  const checkifSameCharacters = []; // to check if the input contain only one type of numbers
  const checkIfNumber = []; // if the length of this array is equal to 1 than the input contain invalid characters.
  let checkCharactersSum; // to check if the sum less than 16.

  if (number.length === 16) {
    for (let i = 0; i < number.length; i++) charactersArray.push(number[i]); //create an array from the input characters

    for (let i = 0; i < charactersArray.length; i++) {
      if (charactersArray[0] === charactersArray[i]) checkifSameCharacters.push(charactersArray[i]);
      if (parseInt(charactersArray[i]).toString() === "NaN") {
        checkIfNumber.push(charactersArray[i])
        break;
      };
    };

    checkCharactersSum = charactersArray.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    if (checkifSameCharacters.length === charactersArray.length)
      return `Invalid! The input ${numbers} should contain at least 2 different types of numbers!`;
    else if (checkIfNumber.length === 1)
       return `Invalid! The input ${numbers} should contain only numbers!`;
    else if (charactersArray[charactersArray.length - 1] % 2 !== 0)
       return `Invalid! The last number of the input ${numbers} is odd, the last number should be even`;
    else if (checkCharactersSum <= 16)
       return `Invalid! The sum of the input ${numbers} must be greater than 16`;
    else
       return `Success! The input ${numbers} is a valid credit card number!`;

  } else  return "The input most be 16 characters";
}

console.log(validateCreditNumber("9999777788880000")); //Valid.
console.log(validateCreditNumber("6666666666661666")); //Valid.
console.log(validateCreditNumber("a92332119c011112")); //Invalid characters.
console.log(validateCreditNumber("4444444444444444")); //Invalid: only one type of number.
console.log(validateCreditNumber("1111111111111110")); //Invalid: sum less than 16.
console.log(validateCreditNumber("6666666666666661")); //Invalid: the last number is odd.
