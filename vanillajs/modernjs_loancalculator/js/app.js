document.getElementById('loan-form').addEventListener('submit', (e) => {
	e.preventDefault();

	console.log('Calculating...');

	document.getElementById('results').style.display = 'none';
	document.getElementById('loading').style.display = 'block';

	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const years = document.getElementById('years');
	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest) / (x - 1);

	if (isFinite(monthly)) {
		setTimeout(() => {
			monthlyPayment.value = monthly.toFixed(2);
			totalPayment.value = (monthly * calculatedPayments).toFixed(2);
			totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
			document.getElementById('results').style.display = 'block';
			document.getElementById('loading').style.display = 'none';
		}, 2000);
	} else {
		console.log('Please check yours numbers');
		showError('Please check yours numbers');
		document.getElementById('loading').style.display = 'none';
	}
});

function showError(error) {
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	const errorDiv = document.createElement('div');
	errorDiv.className = 'alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));

	card.insertBefore(errorDiv, heading);

	setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
