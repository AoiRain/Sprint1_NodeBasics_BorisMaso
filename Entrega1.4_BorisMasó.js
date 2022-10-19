/*SPRINT 1: ENTREGA 1.4 ASYNC/AWAIT

NIVELL 1

- Exercici 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla 
el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.*/

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
        if(idNumber >=1 && idNumber <=3) {
            resolve(employees.find(x => x.id === idNumber).name)
        } else {
            reject('Error non-existent id')
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

const getSalary = idNumber => {
    const promise = new Promise(function(resolve, reject) {
        if(idNumber >=1 && idNumber <=3) {
            resolve(salaries.find(x => x.id === idNumber).salary)
        } else {
            reject('Error: non-existent id')
        }
    })
    return promise
}

getSalary(2).then(function(resolved) {
            console.log(resolved)
        },
        function(rejected) {
            console.log(rejected)
        }
)
        

/*- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï 
la seva funció resolve() després de 2 segons de la seva invocació.*/



/*NIVELL 2

- Exercici 1
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.*/

/*NIVELL 3

-Exercici 1
Força i captura tants errors com puguis dels nivells 1 i 2.*/