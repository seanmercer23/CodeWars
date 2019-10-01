// Is he gonna survive?

function hero (bullets, dragons) {
    if ( bullets >= dragons * 2) {
    return true
    }
    return false
}

// Reverse words
function reverseWords (str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// Complementary DNA
const compliments = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
    }
  function DNAStrand(dna){
    return dna.split('').map(function(pair) {return compliments[pair]}).join('')
  }

// Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true
    } else {
      return false
      }
  }

// Square every digit
function squareDigits(num){
    let numString = num.toString().split('')
    for (let i = 0; i < numString.length; i++) {
      numString[i] = Math.pow(numString[i], 2)
      }
      return parseInt(numString.join(""))
    }

// Friend or Foe?
function friend(friends){
    const output = friends.filter(friends => friends.length === 4)
    return output
  }

// Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  const result = numbers.filter(numbers => numbers % divisor === 0)
  return result
  }

// Abbreviate a Two Word Name
function abbrevName(name){
  let splitName = name.split(" ")
  let firstName = splitName[0]
  let lastName = splitName[1]
  let firstFirstLetter = firstName.split("")
  let secondFirstLetter = lastName.split("")
  return `${firstFirstLetter[0].toUpperCase()}.${secondFirstLetter[0].toUpperCase()}`
}

// String to Number
let stringToNumber = function(str){
  return parseInt(str);
}

//Centry from Year
function century(year) {
  return Math.floor(((year - 1) / 100)) + 1;
}

//To uppercase
function makeUpperCase(str) {
  return str.toUpperCase()
}

//Counting sheep
function countSheeps(arrayOfSheep) {
  let count = 0
  for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]) {
        count++
      }
  }
  return count
}

//Counting sheep refactored
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length
}

//Even or Odd
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

// Even or Odd refactored
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd"
}

// Needle in the haystack
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`
    }
  }
}