const functions = {
    stringLength: (str) => {
        if (str.length<1 || str.length > 10) {
        return console.error();
    } else {
        return str.length;
    }
},

 reverseString: (str) => {
    splittedSring = str.split("");
    reversedString = splittedSring.reverse();
    joinedString = reversedString.join("");
    
    return joinedString
},
myCalculator: {
    add: (num1, num2) => {
        return num1+num2;
    },
    subtract: (num1, num2) => {
        return num1-num2;
    },
    divide: (num1, num2) => {
        return num1/num2;
    },
    multiply: (num1,num2) => {
        return num1*num2;
    },
},

capitalize: (str) => {
    const lower = str.toLowerCase();
    const first = lower.charAt(0);
    const upper = first.toUpperCase();
    return upper + lower.slice(1)
}
}

module.exports = functions;