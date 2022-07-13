const functions = require('./tasks.js');
 
// the string length function
test('counts string characters', () => {
    expect(functions.stringLength("micros")).toBe(6);
});

test('returns undefined if characters are more than 10 or less that 1', () => {
    expect(functions.stringLength("hdhsjhjhdjhjhsjh")).toBe(undefined)
});

// the reverse string function
test('returns a revesed string', () => {
    expect(functions.reverseString("foundation")).toBe("noitadnuof");
})

describe('my calculator', () => {

    //the add method
    test('adds 3 + 4 = 7', () => {
        expect(functions.myCalculator.add(3, 3)).toBe(6);
    });
    test('adds 3 + 4 not to = 9', () => {
        expect(functions.myCalculator.add(3, 4)).not.toBe(8);
    });
    test('adds 7 + 3 not to = 9', () => {
        expect(functions.myCalculator.add(3, 7)).not.toBe(9);
    });
    
    // The subtract method
    test('subtracts 3 - 4 = -1', () => {
        expect(functions.myCalculator.subtract(3, 4)).toBe(-1);
    });
    test('subtract 3 - 3 not to = 5', () => {
        expect(functions.myCalculator.subtract(3, 3)).not.toBe(5);
    });
    test('adds 7 - 3 to = 4', () => {
        expect(functions.myCalculator.subtract(7, 3)).toBe(4);
    });

    // Divide method
    test('Divide 2 / 4 = 0.5', () => {
        expect(functions.myCalculator.divide(2, 4)).toBe(0.5);
    });
    test('Divide 3 / 3 not to = 5', () => {
        expect(functions.myCalculator.divide(3, 3)).not.toBe(5);
    });
    test('divide -2 / -2 to = 1', () => {
        expect(functions.myCalculator.divide(-2, -2)).toBe(1);
    });

    // Multiply method
    test('Multiply 2 * 4 = 8', () => {
        expect(functions.myCalculator.multiply(2, 4)).toBe(8);
    });
    test('Multiply 3 / 3 not to = 5', () => {
        expect(functions.myCalculator.multiply(3, 3)).not.toBe(5);
    });
    test('Multiply -2 / -2 to = 4', () => {
        expect(functions.myCalculator.multiply(-2, -2)).toBe(4);
    });
});

test('Capitalize first letter of string', () => {
    expect(functions.capitalize("iceberg")).toBe("Iceberg")
});