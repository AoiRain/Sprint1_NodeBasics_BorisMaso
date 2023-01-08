const { checkName } = require('../app/asyncAwait');

const correctName = 'Sandra';
const incorrectName = 'Boris';
const invalidName = 38;

test('Test if function works correctly', async () => {
	await expect(checkName(correctName)).resolves.toBe('Sandra is the correct name.');
});

test('Test if function works correctly', async () => {
	await expect(checkName(incorrectName)).resolves.toStrictEqual(Error('Boris is not the correct name.'));
});

test('Test if function works correctly', async () => {
	await expect(checkName(invalidName)).resolves.toStrictEqual(Error('38 is not the correct name.'));
});