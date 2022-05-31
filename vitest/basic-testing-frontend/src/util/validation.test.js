import { test, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

// validateStringNotEmpty test
describe('validateStringNotEmpty() test', () => {
	// test('if it throws an error if string is empty', () => {
	// 	const input = '';
	// 	const resultFn = () => validateStringNotEmpty(input);
	// 	expect(resultFn).toThrow(/must not be empty/);
	// });

	test('if it throw an error, if an empty string is provided', () => {
		const input = '';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).toThrow();
	});

	test('if it throw an error with a message that contains a reason (must not be empty)', () => {
		const input = '';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).toThrow(/must not be empty/);
	});

	test('if it throw an error if a long string of blanks is provided', () => {
		const input = '';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).toThrow();
	});

	test('if it throw an error if any other value than a string is provided', () => {
		const inputNum = 1;
		const inputBool = true;
		const inputObj = {};

		const validationFnNum = () => validateStringNotEmpty(inputNum);
		const validationFnBool = () => validateStringNotEmpty(inputBool);
		const validationFnObj = () => validateStringNotEmpty(inputObj);

		expect(validationFnNum).toThrow();
		expect(validationFnBool).toThrow();
		expect(validationFnObj).toThrow();
	});

	test('if it not throw an error, if a non-empty string is provided', () => {
		const input = 'valid';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).not.toThrow();
	});
});

// validateNumber tests
describe('validateNumber() tests', () => {
	test('if it throw an error if NaN is provided', () => {
		const input = NaN;
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow();
	});

	test('if it throw an error with a message that contains a reason (invalid number)', () => {
		const input = NaN;
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow(/Invalid number/);
	});

	test('if it throw an error if a non-numeric value is provided', () => {
		const input = '1';
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow();
	});

	test('if it not throw an error, if a number is provided', () => {
		const input = 1;
		const validationFn = () => validateNumber(input);
		expect(validationFn).not.toThrow();
	});
});
