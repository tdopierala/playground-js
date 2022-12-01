const data = [
	{
		name: 'Adam Smith',
		age: 26,
		gender: 'male',
		lookingfor: 'female',
		location: 'Boston',
		image: 'https://randomuser.me/api/portraits/men/10.jpg',
	},
	{
		name: 'Vanessa Ward',
		age: 49,
		gender: 'female',
		lookingfor: 'male',
		location: 'New York',
		image: 'https://randomuser.me/api/portraits/women/11.jpg',
	},
	{
		name: 'Ronald Blair',
		age: 66,
		gender: 'male',
		lookingfor: 'female',
		location: 'Miami',
		image: 'https://randomuser.me/api/portraits/men/12.jpg',
	},
	{
		name: 'Miranda Jones',
		age: 31,
		gender: 'female',
		lookingfor: 'male',
		location: 'Huston',
		image: 'https://randomuser.me/api/portraits/women/13.jpg',
	},
	{
		name: 'Ken Spider',
		age: 19,
		gender: 'male',
		lookingfor: 'male',
		location: 'Los Angeles',
		image: 'https://randomuser.me/api/portraits/men/14.jpg',
	},
	{
		name: 'Patricia Adams',
		age: 37,
		gender: 'female',
		lookingfor: 'female',
		location: 'San Diego',
		image: 'https://randomuser.me/api/portraits/women/15.jpg',
	},
	{
		name: 'Stanley Johanson',
		age: 41,
		gender: 'male',
		lookingfor: 'male',
		location: 'Chicago',
		image: 'https://randomuser.me/api/portraits/men/16.jpg',
	},
	{
		name: 'Emily Sanders',
		age: 29,
		gender: 'female',
		lookingfor: 'female',
		location: 'Washington',
		image: 'https://randomuser.me/api/portraits/women/17.jpg',
	},
	{
		name: 'Roman Spilner',
		age: 21,
		gender: 'male',
		lookingfor: 'female',
		location: 'Denver',
		image: 'https://randomuser.me/api/portraits/men/20.jpg',
	},
	{
		name: 'Angela Ravel',
		age: 34,
		gender: 'female',
		lookingfor: 'male',
		location: 'San Antonio',
		image: 'https://randomuser.me/api/portraits/women/21.jpg',
	},
	{
		name: 'Donald Tusk',
		age: 71,
		gender: 'male',
		lookingfor: 'female',
		location: 'Vancuver',
		image: 'https://randomuser.me/api/portraits/men/22.jpg',
	},
	{
		name: 'Sandra Valasqez',
		age: 22,
		gender: 'female',
		lookingfor: 'male',
		location: 'London',
		image: 'https://randomuser.me/api/portraits/women/23.jpg',
	},
	{
		name: 'Kristian Shikorsky',
		age: 18,
		gender: 'male',
		lookingfor: 'male',
		location: 'Sacramento',
		image: 'https://randomuser.me/api/portraits/men/24.jpg',
	},
	{
		name: 'Rachel Green',
		age: 29,
		gender: 'female',
		lookingfor: 'female',
		location: 'Seattle',
		image: 'https://randomuser.me/api/portraits/women/25.jpg',
	},
	{
		name: 'Antony DiAngelo',
		age: 44,
		gender: 'male',
		lookingfor: 'male',
		location: 'Phoenix',
		image: 'https://randomuser.me/api/portraits/men/26.jpg',
	},
	{
		name: 'Kate Alison',
		age: 52,
		gender: 'female',
		lookingfor: 'female',
		location: 'Detroit',
		image: 'https://randomuser.me/api/portraits/women/27.jpg',
	},
];

function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function () {
			return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
		},
	};
}

function nextProfile() {
	const currentProfile = profiles.next().value;

	document.getElementById('profileDisplay').innerHTML = `
		<ul class="list-group">
				<li class="list-group-item">Name: ${currentProfile.name}</li>
				<li class="list-group-item">Age: ${currentProfile.age}</li>
				<li class="list-group-item">Location: ${currentProfile.location}</li>
				<li class="list-group-item">Preference: ${currentProfile.gender} looking for: ${currentProfile.lookingfor}</li>
		</ul>
		`;

	document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}

Array.prototype.shuffle = function () {
	for (let i = this.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[this[i], this[j]] = [this[j], this[i]];
	}
	return this;
};

data.shuffle();
const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', (e) => {
	e.preventDefault();

	nextProfile();
});

nextProfile();
