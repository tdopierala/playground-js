class Weather {
	constructor(city, state) {
		this.apiKey = '';
		this.city = city;
		this.state = state;
	}

	// http://api.openweathermap.org/data/2.5/weather?q=warszawa&appid=xxx
	async getWeather() {
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

		const responseData = await response.json();

		return responseData;
	}

	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}
