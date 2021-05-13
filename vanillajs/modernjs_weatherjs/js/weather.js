class Weather {
    constructor(city, state) {
        this.apiKey = '46a61e9348b237e1836ee6c9f7301638';
        this.city = city;
        this.state = state;
    }

    // http://api.openweathermap.org/data/2.5/weather?q=warszawa&appid=46a61e9348b237e1836ee6c9f7301638
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