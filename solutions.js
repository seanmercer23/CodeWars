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