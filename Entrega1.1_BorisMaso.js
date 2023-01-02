/*SPRINT 1: ENTREGA 1.1 FUNCTIONS AND TEMPLATE LITERALS

NIVELL 1

- EXERCICI 1: crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.*/

function showUserName(userNameParameter) {
	console.log(userNameParameter);
}

showUserName('Boris Masó');

/*NIVELL 2

- EXERCICI 1: mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, 
guardant-los en variables i referenciant-les en la impressió del missatge.*/

const userFirstName = 'Boris';
const userSecondName = 'Masó';

console.log(`The user first name is ${userFirstName} and the user second name is ${userSecondName}.`);

/*- EXERCICI 2: invoca una funció que retorni un valor des de dins d'una template literal.*/

function showFullName(userFirstNameParameter, userSecondNameParameter) {
	return `The user first name is ${userFirstNameParameter} and the user second name is ${userSecondNameParameter}.`;
}

console.log(showFullName(userFirstName, userSecondName));

/*NIVELL 3

- EXERCICI 1: crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció 
compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola 
el compte del 0 al 9 deu vegades.*/

const functionsArray = [];

function countNumber() {
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}
}

function fillArray() {
	for (let i = 0; i < 10; i++) {
		functionsArray.push(countNumber());
	}
}

fillArray();

/*- EXERCICI 2: Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària 
a rebut com a paràmetre.*/

const showName = (function(nameParameter) {
	console.log(nameParameter);
})('Boris');