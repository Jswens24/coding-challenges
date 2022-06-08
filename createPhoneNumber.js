// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!





const createPhoneNum = (numArr) => {
    const phoneFormat = `(${numArr[0]}${numArr[1]}${numArr[2]}) ${numArr[3]}${numArr[4]}${numArr[5]}-${numArr[6]}${numArr[7]}${numArr[8]}${numArr[9]}`
    return phoneFormat
}

console.log(createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))