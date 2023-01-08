let employees = [
	{
		id: 1,
		name: 'Linux Torvalds'
	},
	{
		id: 2,
		name: 'Bill Gates'
	},
	{
		id: 3,
		name: 'Jeff Bezos'
	}
];

let salaries = [
	{
		id: 1,
		salary: 4000
	},
	{
		id: 2,
		salary: 1000
	},
	{
		id: 3,
		salary: 2000
	}
];

const getEmployee = (idNumberParameter) => {
	return new Promise((resolve, reject) => {
		const validId = employees.find((x) => x.id === idNumberParameter);
		if (validId) {
			resolve(validId);
		} else {
			reject(new Error('non-existent id'));
		}
	});
};

const getSalary = (employeeObjectParameter) => {
	return new Promise((resolve, reject) => {
		const validEmployeeObject = salaries.find((x) => x.id === employeeObjectParameter.id);
		if (validEmployeeObject) {
			resolve(validEmployeeObject.salary);
		} else {
			reject(new Error('invalid employee object'));
		}
	});
};

module.exports = { getEmployee, getSalary };
