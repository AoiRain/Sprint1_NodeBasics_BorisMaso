/*NIVELL 1

Exercici 1: crea una funció que, en executar-la, escrigui una frase en un fitxer.*/

const { writeFile, readFile, createReadStream, createWriteStream } = require('fs');

function writeTextInFile(fileNameParameter, textParameter) {
	writeFile(fileNameParameter, textParameter, (error) => {
		if (error) console.log(error);
		console.log(`Text saved succesfully in ${fileNameParameter}.`);
	});
}

writeTextInFile('textFile.txt', 'Hello friends.');

/*Exercici 2: crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

function readTextInFile(fileNameParameter, fileEncodingParameter) {
	readFile(fileNameParameter, fileEncodingParameter, (error, data) => {
		if (error) console.log(error);
		console.log(data);
	});
}

readTextInFile('textFile.txt', 'utf8');

/*Exercici 3: crea una funció que comprimeixi el fitxer del nivell 1.*/

const { createGzip } = require('zlib');

function compressFileIntoGzipFile(fileNameParameter, gzipFileNameParameter) {
	const gzip = createGzip();
	const readable = createReadStream(`./${fileNameParameter}`);
	const writable = createWriteStream(`./${gzipFileNameParameter}`);

	readable.pipe(gzip).pipe(writable);
	console.log(`${fileNameParameter} compressed correctly in ${gzipFileNameParameter}.`);
}

compressFileIntoGzipFile('textFile.txt', 'gzipFile.txt.gz');

/*NIVELL 2

Exercici 1: crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/

function showMessageXTimesEverySecond(messageParameter, xTimesParameter) {
	const showMessageInfinitely = setInterval(() => console.log(messageParameter), 1000);
	setTimeout(() => clearInterval(showMessageInfinitely), (xTimesParameter + 1) * 1000);
}

showMessageXTimesEverySecond('Hello world', 5);

/*Exercici 2: crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador
utilizant Node Child Processes.*/

const { exec } = require('child_process');

function showListPcUserDirectory(userNameParameter) {
	exec(`dir C:\\Users\\${userNameParameter}`, (error, stdout, stderr) => {
		if (error) {
			console.log(error);
			return;
		}
		if (stderr) {
			console.log(stderr);
			return;
		}
		if (stdout) {
			console.log(stdout);
			return;
		}
	});
}

//showListPcUserDirectory('Boris');

//Use the function with your user name in single quotation marks to see the list of content in your user directory.
//Model: showListPcUserDirectory('your user name');

/*NIVELL 3

Exercici 1: crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament,
a partir del fitxer del nivell 1.*/

function convertFileToHexAndBase64(fileNameParameter) {
	readFile(fileNameParameter, (error, data) => {
		if (error) console.log(error);

		const fileNameIntoArray = fileNameParameter.split('.');
		const dataInHex = data.toString('hex');
		const dataInBase64 = data.toString('base64');
		const fileNameInHex = fileNameIntoArray[0] + 'InHex.txt';
		const fileNameInBase64 = fileNameIntoArray[0] + 'InBase64.txt';

		writeFile(fileNameInHex, dataInHex, (error) => {
			if (error) console.log(error);
			console.log(`File saved succesfully in hexadecimal in ${fileNameInHex}.`);
		});
		writeFile(fileNameInBase64, dataInBase64, (error) => {
			if (error) console.log(error);
			console.log(`File saved succesfully in base64 in ${fileNameInBase64}.`);
		});
	});
}

convertFileToHexAndBase64('textFile.txt');

/*Crea una funció que guardi els fitxers del punt anterior, ara encriptatsamb l'algoritme aes-192-cbc, 
i esborri els fitxers inicials.*/

/*Crea una altra funció que desencripti i descodifiquiels fitxers de l'apartat anterior tornant a generar 
una còpia de l'inicial. Inclou un README amb instruccions per a l'execució de cada part.*/