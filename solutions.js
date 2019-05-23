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