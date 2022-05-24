import { describe, expect, test } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken() tests', () => {

	test('if it can generate a token', (done) => {
		const email = 'testing@domain.com';

		generateToken(email, (err, token) => {

			try {
				expect(token).toBeDefined();
				done();
			} catch (error) {
				done(error);
			}
		});
	});
});

describe('generateTokenPromise() tests', () => {

	test('if it can generate a token', () => {
		const email = 'testing@domain.com';

		return expect(generateTokenPromise(email)).resolves.toBeDefined();
	});

	test('if it can generate a token (async-await)', async () => {
		const email = 'testing@domain.com';

		const token = await generateTokenPromise(email);

		expect(token).toBeDefined();
	});
});