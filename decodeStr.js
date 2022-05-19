// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"



const decoder = (str) => {
    const advanceNum = +str[0];
    let result = '';
    let charcode = 0;

    for (let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + advanceNum;
        result += String.fromCharCode(charcode);
    }
    result = result.substring(1);
    return result;
}

console.log(decoder('2fcjjm'));
console.log(decoder('3ce'));
console.log(decoder('1a'));