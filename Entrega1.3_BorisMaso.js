/*SPRINT 1: ENTREGA 1.3 PROMISES & CALLBACKS

NIVELL 1

- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent
de si la Promise es resol o no.]*/

function checkName(nameParameter) {
	return new Promise((resolve, reject) => {
		if (nameParameter === 'Sandra') {
			resolve(`${nameParameter} is the correct name.`);
		} else {
			reject(new Error(`${nameParameter} is not the correct name.`));
		}
	});
}

checkName('Sandra').then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));
checkName('Boris').then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));

/*- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge
o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/

const checkingName = (nameParameter, callbackFunctioParameter) => {
	if (nameParameter === 'Sandra') {
		const correctName = `${nameParameter} is the correct name.`;
		return callbackFunctioParameter(correctName);
	} else {
		const incorrectName = `${nameParameter} is not the correct name.`;
		return callbackFunctioParameter(incorrectName);
	}
};

function showName(nameParameter) {
	console.log(nameParameter);
}

checkingName('Sandra', showName);
checkingName('Boris', showName);

/*NIVELL 2

- EXERCICI 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise 
efectuant la cerca en l'objecte pel seu id.*/

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

getEmployee(1).then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));
getEmployee(0).then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));

/*- EXERCICI 2: crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee 
i retorni el seu salari.*/

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

getSalary({ id: 1, name: 'Linux Torvalds' })
	.then((resolve) => console.log(resolve))
	.catch((reject) => console.log(reject));
getSalary({ id: 0, name: 'Linux Torvalds' })
	.then((resolve) => console.log(resolve))
	.catch((reject) => console.log(reject));

/*- EXERCICI 3: invoca la primera funció getEmployee() i després getSalary() niant l'execució de les
dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.*/

getEmployee(1)
	.then((resolve) => {
		const employeeObject = resolve;
		const employeeName = employeeObject.name;
		getSalary(employeeObject)
			.then((resolve) => console.log(`Employee: ${employeeName}\nSalary: ${resolve}`))
			.catch((reject) => console.log(reject));
	})
	.catch((reject) => console.log(reject));

/*NIVELL 3

- EXERCICI 1: fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.*/

getEmployee(0)
	.then((resolve) => {
		const employeeObject = resolve;
		const employeeName = employeeObject.name;
		getSalary(employeeObject)
			.then((resolve) => console.log(`Employee: ${employeeName}\nSalary: ${resolve}`))
			.catch((reject) => console.log(reject));
	})
	.catch((reject) => console.log(reject));