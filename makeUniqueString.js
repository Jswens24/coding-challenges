// Write a function to remove all duplicate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// helowrd

// >>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu

const makeUnique = (str) => {
    let strArr = [...str];
    for (let i = 0; i < strArr.length; i++) {
        for (let j = i + 1; j < strArr.length; j++) {
            if (strArr[i].includes(strArr[j])) {
                strArr.splice(j, 1);
                j--
            }
        }
    }
    return strArr
}
console.log(makeUnique('hello'))