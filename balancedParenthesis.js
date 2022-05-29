// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:

// >>> has_balanced_parens("()")
// true

// >>> has_balanced_parens("(Oh Noes!)(")
// false

// >>> has_balanced_parens("((There's a bonus open paren here.)")
// false

// >>> has_balanced_parens(")")
// false

// >>> has_balanced_parens("(")
// false

// >>> has_balanced_parens("(This has (too many closes.) ) )")
// false
// You may consider a string with no parentheses balanced:

// hasBalancedParens("Hey...there are no parens here!")
// true


const hasBalancedParens = (str) => {
    if (str[0] === '(' && str[str.length - 1] === ')') {
        return true
    }
    else if (str.includes('(') || str.includes(')')) {
        return false
    } else {
        return true;
    }
}


console.log(hasBalancedParens('(Hellooooooooo)'))
console.log(hasBalancedParens('Hellooooooooo'))
console.log(hasBalancedParens('Hellooooooooo)'))