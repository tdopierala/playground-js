document.getElementById('name').addEventListener('keyup', (e) => {
	const name = document.getElementById('name');
	const re = /^[a-zA-Z]{2,10}$/;

	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
});

document.getElementById('zip').addEventListener('keyup', (e) => {
	const zip = document.getElementById('zip');
	// const re = /^[0-9]{5}(-[0-9]{4})?$/; // reg. exp. form US zip codes
	const re = /^[0-9]{2}-[0-9]{3}$/; // reg. exp. form PL zip codes

	if (!re.test(zip.value)) {
		zip.classList.add('is-invalid');
	} else {
		zip.classList.remove('is-invalid');
	}
});

document.getElementById('email').addEventListener('keyup', (e) => {
	const email = document.getElementById('email');
	const re = /^[a-zA-Z_\-\.]{2,}\@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}$/;

	if (!re.test(email.value)) {
		email.classList.add('is-invalid');
	} else {
		email.classList.remove('is-invalid');
	}
});

document.getElementById('phone').addEventListener('keyup', (e) => {
	const phone = document.getElementById('phone');
	const re = /^(\+\(\d{2}\) )?[0-9 ]{9,12}$/; // reg. exp. for PL phone numbers

	// (+48) 123 456 789
	// (+48) 12 345 67 89

	if (!re.test(phone.value)) {
		phone.classList.add('is-invalid');
	} else {
		phone.classList.remove('is-invalid');
	}
});
