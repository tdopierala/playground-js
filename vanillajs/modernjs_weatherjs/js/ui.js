class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.pressure = document.getElementById('w-pressure');
		this.wind = document.getElementById('w-wind');
	}

	paint(weather) {
		this.location.textContent = weather.name;
		this.desc.textContent = `${weather.weather[0].main} (${weather.weather[0].description})`;
		this.string.innerHTML = `${weather.main.temp}&deg;C`;
		this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
		this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
		this.feelsLike.innerHTML = `Feels like: ${weather.main.feels_like}&deg;C`;
		this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
		this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
	}
}
