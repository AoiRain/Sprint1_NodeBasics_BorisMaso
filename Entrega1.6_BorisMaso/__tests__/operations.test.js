const { addition, substraction, multiplication, division } = require('../app/operations');

const number1 = 10;
const number2 = 2;
const number3 = -10;
const number4 = -2;
const number5 = 0;
const notANumber = 'a';

test('Test if the function works correctly.', () => {
	//Function with the expected parameters.
	expect(addition(number1, number2)).toBe(12);
	// Function with negative parameters.
	expect(addition(number3, number4)).toBe(-12);
    //Function with more than two parameters.
    expect(addition(number1, number2, number3, number4)).toBe(0);
    //Function with one parameter being 'Nan'.
    expect(addition(number1, notANumber)).toBe('Please, only use parameters that are numbers.');
});

test('Test if the function works correctly.', () => {
	//Function with the expected parameters.
	expect(substraction(number1, number2)).toBe(8);
    // Function with negative parameters.
	expect(substraction(number3, number4)).toBe(-8);
    //Function with more than two parameters.
    expect(substraction(number1, number2, number3, number4)).toBe(20);
    //Function with one parameter being 'Nan'.
    expect(substraction(number1, notANumber)).toBe(NaN);
});

test('Test if the function works correctly.', () => {
	//Function with the expected parameters.
	expect(multiplication(number1, number2)).toBe(20);
    // Function with negative parameters.
	expect(multiplication(number3, number4)).toBe(20);
    //Function with more than two parameters.
    expect(multiplication(number1, number2, number3, number4)).toBe(400);
    //Function with one parameter being 'Nan'.
    expect(multiplication(number1, notANumber)).toBe(NaN);
});

test('Test if the function works correctly.', () => {
	//Function with the expected parameters.
	expect(division(number1, number2)).toBe(5);
    // Function with negative parameters.
	expect(division(number3, number4)).toBe(5);
    //Function with more than two parameters.
    expect(division(number1, number2, number3, number4)).toBe(0.25);
    //Function with one parameter being 'Nan'.
    expect(division(number1, notANumber)).toBe(NaN);
    //Function with one parameter being zero.
    expect(division(number1, number2, number5)).toBe("Please, don't use zero as a parameter.");
});