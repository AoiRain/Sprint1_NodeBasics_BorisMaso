const { getEmployee, getSalary } = require('../app/getEmployee&getSalary');

const validIdparameter = 1;
const incorrectIdparameter = 0;
const invalidIdParameter = 'a';
const validEmployeeObject = { id: 1, name: 'Linux Torvalds' };
const incorrectEmployeeObject = { id: 0, name: 'Lore Ipsum' };
const invalidEmployeeObject = 7;

test('Test if function works correctly', () => {
	//Function with a valid Id parameter.
	return getEmployee(validIdparameter).then((resolve) => {
		expect(resolve).toStrictEqual({ id: 1, name: 'Linux Torvalds' });
	});
});

test('Test if function works correctly', () => {
	//Function with an incorrect Id parameter.
	return getEmployee(incorrectIdparameter).catch((reject) => {
		expect(reject).toStrictEqual(Error('non-existent id'));
	});
});

test('Test if function works correctly', () => {
	//Function with an invalid Id parameter.
	return getEmployee(invalidIdParameter).catch((reject) => {
		expect(reject).toStrictEqual(Error('non-existent id'));
	});
});

test('Test if function works correctly', () => {
	//Function with a valid employeeObject.
	return getSalary(validEmployeeObject).then((resolve) => {
		expect(resolve).toStrictEqual(4000);
	});
});

test('Test if function works correctly', () => {
	//Function with an incorrect employeeObject.
	return getSalary(incorrectEmployeeObject).catch((reject) => {
		expect(reject).toStrictEqual(Error('invalid employee object'));
	});
});

test('Test if function works correctly', () => {
	//Function with an invalid employeeObject.
	return getSalary(invalidEmployeeObject).catch((reject) => {
		expect(reject).toStrictEqual(Error('invalid employee object'));
	});
});
