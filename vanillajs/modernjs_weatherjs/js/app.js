const storage = new Storage();
const w_location = storage.getLocationData();

const weather = new Weather(w_location.city, w_location.state);

const ui = new UI();

const getWeather = () => {
	weather
		.getWeather()
		.then((results) => {
			console.log(results);
			ui.paint(results);
		})
		.catch((error) => console.log(error));
};

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
	e.preventDefault();

	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;

	weather.changeLocation(city, state);
	storage.setLocationData(city, state);

	getWeather();

	$('#locModal').modal('hide');
});
