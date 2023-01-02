/*SPRINT 1: ENTREGA 1.2 CLASSES & ARROW FUNCTIONS

NIVELL 1

- EXERCICI 1: mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.*/

console.log(((number1, number2) => number1 + number2)(1, 2));

/*NIVELL 2

- EXERCICI 1: crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor 
el paràmetre rebut.*/

const carObject = (parameter) => {
	const car = { type: parameter };
	return car;
};

console.log(carObject('Audi'));

/*- EXERCICI 2: crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode 
dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.*/

class Persona {
	constructor(nomParameter) {
		this.nom = nomParameter;
	}

	dirNom() {
		console.log(this.nom);
	}
}

const persona = new Persona('Boris');
persona.dirNom();

/*NIVELL 3

- EXERCICI 1: escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb 
diferents definicions.*/

class Car {
	constructor() {
		if (this.constructor === Car) {
			throw new Error("Abstract classes can't be instantiated.");
		}
		this.model = 'unknown';
	}

	showModel() {
		throw new Error('Method "showModel()" must be implemented.');
	}
}

function createModelClassInheritedFromCarAbstractClass(modelParameter) {
	return new class Model extends Car {
		constructor() {
			super(); //Ens permet fer ús en la classe heretada " Model" del constructor i els mètodes de la classe abstracta "Car".
			this.model = modelParameter;
		}

		showModel() {
			console.log(this.model);
		}
	};
}

const audi = createModelClassInheritedFromCarAbstractClass('Audi');
audi.showModel();

const fiat = createModelClassInheritedFromCarAbstractClass('Fiat');
fiat.showModel();
