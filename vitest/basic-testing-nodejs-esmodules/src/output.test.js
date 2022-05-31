import { test, expect, describe } from 'vitest';
import { generateResultText } from './output.js';

describe('generateResultText() tests', () => {
	test('if it return a string, no mater what to be provided', () => {
		const valNumber = 1;
		const valString = 'invalid';
		const valBool = false;

		const result1 = generateResultText(valNumber);
		const result2 = generateResultText(valString);
		const result3 = generateResultText(valBool);

		expect(result1).toBeTypeOf('string');
		expect(result2).toBeTypeOf('string');
		expect(result3).toBeTypeOf('string');
	});

	test('if result contain a provided number', () => {
		const number = 10;

		const result = generateResultText(number);

		expect(result).toContain(number.toString());
	});

	test('if it return an empty string if "no-calc" is provided', () => {
		const input = 'no-calc';

		const result = generateResultText(input);

		expect(result).toBe('');
	});

	test('if it return a string with "Invalid" if invalid is provided', () => {
		const input = 'invalid';

		const result = generateResultText(input);

		expect(result).toContain('Invalid');
	});
});
