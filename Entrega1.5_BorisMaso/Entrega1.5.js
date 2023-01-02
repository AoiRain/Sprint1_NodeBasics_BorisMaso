//NIVELL 1

//Exercici 1: crea una funció que, en executar-la, escrigui una frase en un fitxer.

const { writeFile, readFile, createReadStream, createWriteStream } = require('fs');

function writeTextInFile(fileName, text) {
	//El mòdul "writeFile" sobreescriu el text en un document existent.
	//En cas de no esxistir el document el crea.
	writeFile(fileName, text, (error) => {
		if (error) console.log(error);
		console.log(`Text saved successfully in ${fileName}.`);
	});
}

writeTextInFile('textFile.txt', 'Hello world.');

//Exercici 2: crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

function readTextInFile(fileName) {
	readFile(fileName, 'utf8', (error, text) => {
		if (error) console.log(error);
		console.log(text);
	});
}

readTextInFile('textFile.txt');

//Exercici 3: crea una funció que comprimeixi el fitxer del nivell 1.

const { createGzip } = require('zlib');

function compressFileIntoGzipFile(fileName, gzipFileName) {
	const gzip = createGzip();
	const readable = createReadStream(`./${fileName}`);
	const writable = createWriteStream(`./${gzipFileName}`);

	readable.pipe(gzip).pipe(writable);
	console.log(`${fileName} compressed correctly in ${gzipFileName}.`);
}

compressFileIntoGzipFile('textFile.txt', 'gzipFile.txt.gz');

//NIVELL 2

//Exercici 1: crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon

//Exercici 2: crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador
//utilizant Node Child Processes.

//NIVELL 3

//Exercici 1: crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament,
//a partir del fitxer del nivell 1. Crea una funció que guardi els fitxers del punt anterior, ara encriptats
//amb l'algoritme aes-192-cbc, i esborri els fitxers inicials. Crea una altra funció que desencripti i descodifiqui
//els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial. Inclou un README amb instruccions per
//a l'execució de cada part.
