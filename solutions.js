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

// Needle refactored
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`
}

// Final Grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
  return 100
  } else if (exam > 75 && projects >= 5) {
    return 90 
  } else if (exam > 50 && projects >= 2) {
    return 75
    } else {
      return 0
    }
}

// Enough space
function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : (on + wait) - cap
}

// Make negative
function makeNegative(num) {
  return num < 0 ? num : num * -1
}

// Closest Elevator
function elevator(left, right, call){
  if (Math.abs(left - call) < Math.abs(right - call)) {
    return "left"
  }
  else if (Math.abs(left - call) > Math.abs(right-call)) {
    return "right"
  }
  else {
    return "right"
  }
}
// Describe Age
function describeAge(age) {
  let s="You're a(n) "
  return age<13?`${s}kid`:age<18?`${s}teenager`:age<65?`${s}adult`:`${s}elderly`
}

//How Many Lightsabers do you own
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0
}

//Is it a palindrome?
function isPalindrome(x) {
  return x.toLowerCase() == x.split("").reverse().join("").toLowerCase()
}

// Remove first and last character
function removeChar(str){
  let strArr = str.split("")
  for (let i = 0; i < 2; i++) {
    strArr.reverse().pop()
  }
  return strArr.join("")
 };
 
 // Remove refactor
 function removeChar(str){
  return str.slice(1, -1)
 };

 // Remove spaces
 function noSpace(x){
  return x.split(" ").join("")
}

// Better than average
function betterThanAverage(classPoints, yourPoints) {
  const reducer = (acc, cv) => acc + cv
  const average = (classPoints.reduce(reducer) + yourPoints) / (classPoints.length + 1)
  return yourPoints > average
}

// Reverse words
function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}

// Beast feast
function feast(beast, dish) {
  const b = beast.split("")
  const d = dish.split("")
  return b[0] === d[0] && b[b.length - 1] === d[d.length - 1]
}

// Beast feast refactor
function feast(beast, dish) {
  return beast[0] === dish[0] && 
  beast[beast.length - 1] === dish[dish.length - 1]
}

// Switch it up
function switchItUp(number){
  switch (true) {
    case number === 0: return "Zero"
    break
    case number === 1: return "One"
    break
    case number === 2: return "Two"
    break
    case number === 3: return "Three"
    break
    case number === 4: return "Four"
    break
    case number === 5: return "Five"
    break
    case number === 6: return "Six"
    break
    case number === 7: return "Seven"
    break
    case number === 8: return "Eight"
    break
    case number === 9: return "Nine"
    break
   }
 }

 // Switch it up refactor
 function switchItUp(number){
  switch(number) {
    case 0: return "Zero"
    break
    case 1: return "One"
    break
    case 2: return "Two"
    break
    case 3: return "Three"
    break
    case 4: return "Four"
    break
    case 5: return "Five"
    break
    case 6: return "Six"
    break
    case 7: return "Seven"
    break
    case 8: return "Eight"
    break
    case 9: return "Nine"
    break
    default: return number
  }
 }

 // Smallest integer from array
 class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// Array plus Array
function arrayPlusArray(arr1, arr2) {
  const reducer = (acc, cv) => acc + cv
  return (arr1.reduce(reducer)) + (arr2.reduce(reducer))
}

//Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird))
};

//Wolf in Sheep's clothing
function warnTheSheep(queue) {
  return queue.indexOf("wolf") === queue.length - 1 ? 
  "Pls go away and stop eating my sheep"
  :
  `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`
}

// Boolean to Yes or No
function boolToWord( bool ){
  return bool ? "Yes" : "No"
}

// Check the exam
function checkExam(array1, array2) {
  let grade = 0
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      grade += 4 
    } else if (array2[i] === "") {
      grade + 0
    } else if (array1[i] !== array2[i]) {
      grade--
    }
  }
  return grade >= 0 ? grade : 0
 }

 // Invert values
 function invert(array) {
  return array.map(e => e * -1)
}

// Mean of an array
function getAverage(marks){
  const reducer = (acc, cv) => acc + cv
  return Math.floor(marks.reduce(reducer) / marks.length)
}

// Count by X
function countBy(x, n) {
  var z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x)
  }
  return z;
}

// Sentence Smash
function smash (words) {
  "use strict";
  return words.join(" ")
};

// Are you playing banjo?
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r" ? 
  `${name} plays banjo` 
  : 
  `${name} does not play banjo`
}

// Remove excalamation mark
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// Remove every other
function removeEveryOther(arr){
  for (let i=1; i < arr.length; i++) {
    arr.splice(i, 1) 
  }
  return arr
}

// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= fuelLeft * mpg ? true : false
};

// Will you make it refactored
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft
};

// Check the bucket
function checkTheBucket(bucket){
  return bucket.includes('gold')
}

// Reduce but grow
function grow(x){
  const reducer = (acc, cv) => acc * cv
  return x.reduce(reducer)
}

//Repeat string
function repeatStr (n, s) {
  return s.repeat(n);
}

// Generate Range
function generateRange(min, max, step){
  let rangeArray = []
  for (let i = min; i <= max; i += step) {
    rangeArray.push(i)
  }
  return rangeArray
}

// Count Sheep
var countSheep = function (num){
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += i.toString() + ' sheep...';
  }
  return result;
}

// Summation
var summation = function (num) {
  let sumArray = []
  const reducer = (acc, cv) => acc + cv
  for (let i = 0; i <= num; i++) {
    sumArray.push(i)
  }
  return sumArray.reduce(reducer)
}

// Summation Refactor
var summation = function (num) {
  return num * (num + 1) / 2
}

// Check for factor
function checkForFactor (base, factor) {
  return base % factor === 0
}

// Personalized greeting
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}

// Grade book
function getGrade (s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3
  return avg >= 90 ? 'A' : 
         avg >= 80 ? 'B' :
         avg >= 70 ? 'C' :
         avg >= 60 ? 'D' : 'F'
}

// Square(n) sum
function squareSum(numbers){
  return numbers.map(num => Math.pow(num, 2)).reduce((acc, cv) => acc + cv, 0)
}

// Keep hydrated
function litres(time) {
  return Math.floor(time / 2);
}

// Basic Math (add or subtract)
const calculate = str =>
  String(
    str
      .split('plus')
      .join(' ')
      .split('minus')
      .join(' -')
      .split(' ')
      .reduce((total, num) => total + Number(num), 0)
  )

  //Basic Math refactor
  function calculate(str) {
    return String(eval(str.split('plus').join('+').split('minus').join('-')));
    }

  //Odd One
  function oddOne(arr) {
    const isOdd = (e) => e % 2 !== 0
    return arr.findIndex(isOdd)
  }

  // Spacify
  function spacify(str) {
    return str.split("").join(" ")
  }

  // Friends
  function friends(n){
    return n - 3 < 0 ? 0 : Math.floor(Math.log2(n -1))
  }

  //Remove duplicate words
  function removeDuplicateWords (s) {
    return s.split(" ").reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []).join(" ")
  }
  
  // Remove duplicate word refactor
  function removeDuplicateWords (s) {
    const words = s.split(" ")
    const unique = new Set(words)
    return [...unique].join(" ")
  }

  //Mash Array
  function arrayMash (array1, array2) {
    const mashArray = []
    for(let i=0; i<array1.length; i++) {
      mashArray.push(array1[i])
      mashArray.push(array2[i])
    }
    return mashArray
  }

  // Product Array
  function product(values) {
    return values === null || values.length === 0 ? 
    null : values.reduce((acc, cv) => acc * cv, [1])
  }

  // Powers of 3
  function largestPower(n){
    let k = 0
    while (Math.pow(3, k) < n) k++
      return k - 1
    }