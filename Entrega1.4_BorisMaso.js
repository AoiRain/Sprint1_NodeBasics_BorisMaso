/*SPRINT 1: ENTREGA 1.4 ASYNC/AWAIT

NIVELL 1

- Exercici 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla 
el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.*/

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

async function showEmployeeNameAndSalary(idNumberParameter) {
	try {
		const employeeObject = await getEmployee(idNumberParameter);
		const employeeName = employeeObject.name;
		const employeeSalary = await getSalary(employeeObject);
		const employeeNameAndSalary = `Employee: ${employeeName}\nSalary: ${employeeSalary}`;

		console.log(employeeNameAndSalary);
	} catch (error) {
		console.log(error);
	}
}

showEmployeeNameAndSalary(1);
showEmployeeNameAndSalary(0);

/*- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï 
la seva funció resolve() després de 2 segons de la seva invocació.*/

async function checkName(nameParameter) {
	try {
		const checkedName = await nameChecking(nameParameter);
		console.log(checkedName);
	} catch (error) {
		console.log(error);
	}
}

function nameChecking(nameParameter) {
	return new Promise((resolve, reject) => {
		if (nameParameter === 'Sandra') {
			setTimeout(() => {
				resolve(`${nameParameter} is the correct name.`);
			}, 2000);
		} else {
			reject(new Error(`${nameParameter} is not the correct name.`));
		}
	});
}

checkName('Sandra');
checkName('Boris');

/*NIVELL 2

- Exercici 1
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.*/

function doubleNumber(numberParameter) {
	return new Promise((resolve, reject) => {
		if (typeof numberParameter !== 'number') {
			reject(new Error('Please, use a number.'));
		} else {
			setTimeout(() => resolve(numberParameter * 2), 2000);
		}
	});
}

doubleNumber(2).then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));
doubleNumber('A').then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));

/*Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.*/

async function addittionDoubleNumber(numberParameter1, numberParameter2, numberParameter3) {
	try {
		const doubleNumber1 = await doubleNumber(numberParameter1);
		const doubleNumber2 = await doubleNumber(numberParameter2);
		const doubleNumber3 = await doubleNumber(numberParameter3);
		const doubleNumbersAddittion = doubleNumber1 + doubleNumber2 + doubleNumber3;

		console.log(doubleNumbersAddittion);
	} catch (error) {
		console.log(error);
	}
}

addittionDoubleNumber(1, 2, 3);
addittionDoubleNumber('A' , 2);

/*NIVELL 3

-Exercici 1
Força i captura tants errors com puguis dels nivells 1 i 2.*/

showEmployeeNameAndSalary(0);
checkName('Boris');
doubleNumber('A').then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));
addittionDoubleNumber('A' , 2);