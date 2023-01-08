function addition(number1Parameter, number2Parameter, ...parameters) {
	let result = number1Parameter + number2Parameter;
	parameters.forEach((i) => (result += i));
	const checkIfResultIsAString = typeof result === 'string';
	const messageWhenPArameterIsNaN = 'Please, only use parameters that are numbers.';
	if (checkIfResultIsAString) {
		return messageWhenPArameterIsNaN;
	} else {
		return result;
	}
}

function substraction(number1Parameter, number2Parameter, ...parameters) {
	let result = number1Parameter - number2Parameter;
	parameters.forEach((i) => (result -= i));
	return result;
}

function multiplication(number1Parameter, number2Parameter, ...parameters) {
	let result = number1Parameter * number2Parameter;
	parameters.forEach((i) => (result *= i));
	return result;
}

function division(number1Parameter, number2Parameter, ...parameters) {
	let result = number1Parameter / number2Parameter;
	parameters.forEach((i) => (result /= i));
	const messageWhenAParameterIsZero = "Please, don't use zero as a parameter.";
	if (result === Infinity) {
		return messageWhenAParameterIsZero;
	} else {
		return result;
	}
}

module.exports = { addition, substraction, multiplication, division };