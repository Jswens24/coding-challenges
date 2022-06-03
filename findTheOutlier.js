// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

const findOutlier = (intArr) => {
    let evens = 0;
    for (let i = 0; i < 3; i++) {
        if (intArr[i] % 2 === 0) {
            evens++;
        }
    }

    let isArrEven = evens > 1;

    for (let i = 0; i < intArr.length; i++) {
        const isCurrentEven = intArr[i] % 2 === 0;
        if ((isArrEven && !isCurrentEven) || (!isArrEven && isCurrentEven)) {
            return intArr[i]
        }
    }
}


console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));