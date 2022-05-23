import { test, expect, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber() tests', () => {

	test('if it can transform a string to a number', () => {
		const input = '2';

		const result = transformToNumber(input);

		// const expectedResult = +input;
		// expect(result).toBe(expectedResult);
		expect(result).toBeTypeOf('number');
		expect(result).toBe(+input);
	});

	test('if it return NaN for non-transformable values', () => {
		const input1 = 'invalid';
		const input2 = {};

		const result1 = transformToNumber(input1);
		const result2 = transformToNumber(input2);

		expect(result1).toBeNaN;
		expect(result2).toBeNaN;
	});

});

describe('cleanNumbers() tests', () => {

	test('if it return an error when non iterable type od data is provided', () => {
		const input1 = {};
		const input2 = null;
		const input3 = undefined;

		const result1 = () => cleanNumbers(input1);
		const result2 = () => cleanNumbers(input2);
		const result3 = () => cleanNumbers(input3);

		expect(result1).toThrow(/not iterable/);
		expect(result2).toThrow(/not iterable/);
		expect(result3).toThrow(/not iterable/);
	});

	test('if it return an array (object)', () => {
		const input = ['1', '2'];

		const result = cleanNumbers(input);

		expect(result).toBeTypeOf('object');
		expect(result.length).toBe(input.length)
	});

	test('if it returns an array of numbers if an array of string numbers is provided', () => {
		const input = ['1', '2'];

		const result = cleanNumbers(input);

		expect(result[0]).toBeTypeOf('number');
		expect(result[1]).toBeTypeOf('number');
		expect(result[2]).toBeUndefined();
	});


	test('if it throw an error if an array with al least on empty string is provided', () => {
		const input = ['', 2];

		const result = () => cleanNumbers(input);

		expect(result).toThrow();
	});

});