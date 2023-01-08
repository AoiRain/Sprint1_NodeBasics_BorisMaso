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
	return nameParameter;
}

module.exports = { checkingName, showName };
