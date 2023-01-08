async function checkName(nameParameter) {
	try {
		const checkedName = await nameChecking(nameParameter);
		return checkedName;
	} catch (error) {
		return error;
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

// checkName('Sandra');
// checkName('Boris');

module.exports = { checkName };