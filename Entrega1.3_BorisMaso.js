/*SPRINT 1: ENTREGA 1.3 PROMISES & CALLBACKS

NIVELL 1

- Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent
de si la Promise es resol o no.]*/

function checkName(name) {
    const promise = new Promise(function(resolve, reject) {
        if(name == 'Boris') {
            resolve('Correct name')
        } else {
            reject(new Error('incorrect Name'))
        }
    })
    return promise
}

checkName('Boris').then(
    function(resolved) {
        console.log(resolved)
    },
    function(rejected) {
        console.log(rejected)
    }
)

checkName('Sandra').then(
    function(resolved) {
        console.log(resolved)
    },
    function(rejected) {
        console.log(rejected)
    }
)

/*- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge
o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/

const checkingName = (name, callbackFunction) => {
    if(name == 'Boris') {
        const checkedName = 'Correct Name'
        return callbackFunction(checkedName)
    } else {
        const checkedName = 'Error: incorrect name'
        return callbackFunction(checkedName)
    }
}

function showName(name) {
    console.log(name)
}

checkingName('Boris', showName)

/*NIVELL 2

- EXERCICI 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise 
efectuant la cerca en l'objecte pel seu id.*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}]
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}]

const getEmployee = idNumber => {
    const promise = new Promise(function(resolve, reject) {
        const validId = employees.find(x => x.id === idNumber)
        if(validId) {
            resolve(validId.name)
        } else {
            reject(new Error('non-existent id'))
        }
    })
    return promise
}

getEmployee(1).then(function(resolved) {
            console.log(resolved)
        },
        function(rejected) {
            console.log(rejected)
        }
)

/*- EXERCICI 2: crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee 
i retorni el seu salari.*/

const getSalary = searchedName => {
    const promise = new Promise(function(resolve, reject) {
        const validName = employees.find(x => x.name === searchedName)
        if(validName) {
            resolve(salaries.find(x => x.id === validName.id).salary)
        } else {
            reject(new Error('non-existent name'))
        }
    })
    return promise
}

getSalary('Linux Torvalds').then(function(resolved) {
            console.log(resolved)
        },
        function(rejected) {
            console.log(rejected)
        }
)

/*- EXERCICI 3: invoca la primera funció getEmployee() i després getSalary() niant l'execució de les
dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.*/

getEmployee(1).then(function(resolved) {
    const employee = resolved
    getSalary(employee).then(function(resolved) {
        console.log(`Name: ${employee}\nSalary: ${resolved}`)
    })
},
function(rejected){
    console.log(rejected)
}
)

/*NIVELL 3

- EXERCICI 1: fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.*/

getEmployee(5398).then(function(resolved) {
    const employee = resolved
    getSalary(employee).then(function(resolved) {
        console.log(`Name: ${employee}\nSalary: ${resolved}`)
    })
})
.catch(function(error) {
    console.log(error)
})