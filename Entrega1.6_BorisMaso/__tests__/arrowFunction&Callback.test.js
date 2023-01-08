const { checkingName, showName } = require('../app/arrowFunction&Callback');

const correctName = 'Sandra';
const incorrectName1 = 'Boris';
const incorrectName2 = 38;

test('Test if the function works correctly.', () => {
	//Function with the expected parameters.
	expect(checkingName(correctName, showName)).toBe(`Sandra is the correct name.`);
	//Function with an incorrect string parameter.
	expect(checkingName(incorrectName1, showName)).toBe(`Boris is not the correct name.`);
	//Function with an incorrect number parameter.
	expect(checkingName(incorrectName2, showName)).toBe(`38 is not the correct name.`);
});

test('Test if the callback function works properly.', () => {
	//Function with a string parameter.
	expect(showName(correctName)).toBe('Sandra');
	//function with a number paramter.
	expect(showName(incorrectName2)).toBe(38);
});
