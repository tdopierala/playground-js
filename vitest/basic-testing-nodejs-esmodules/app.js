import express from 'express';

import { calculateResult } from './src/math.js';
import { extractNumbers, extractResultQueryParam } from './src/parser.js';
import { generateResultText } from './src/output.js';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	const result = extractResultQueryParam(req);
	let resultText = generateResultText(result);

	const htmlContent = `
		<html>
			<head>
				<title>Testing Basics</title>
				<style>
					html {
						font-family: sans-serif;
					}
					
					body {
						margin: 2rem;
					}

					div, label {
						display: block;
						margin-bottom: 0.5rem;
					}
				</style>
			</head>
			<body>
				<form action="/calculate" method="POST">
					<div>
						<label for="num1">First Number</label>
						<input id="num1" name="num1" type="numeric">
					</div>
					<div>
						<label for="num2">Second Number</label>
						<input id="num2" name="num2" type="numeric">
					</div>
					<button>Calculate</button>
				</form>
				<div>
					${resultText}
				</div>
			</body>
		</html>
	`;

	res.send(htmlContent);
});

app.post('/calculate', (req, res) => {

	const numberInputs = extractNumbers(req);
	let result = calculateResult(numberInputs);

	res.redirect('/?result=' + result);
});

app.listen(3000);
