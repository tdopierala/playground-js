import { test, expect } from 'vitest';
import { transformToNumber } from './numbers';

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