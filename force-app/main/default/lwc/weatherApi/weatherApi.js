import { LightningElement, api } from 'lwc';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '';
export default class WeatherApi extends LightningElement {
    @api city
    weather
    temp
    imgUrl
    description
    isLoading = true;

    renderedCallback() {
        this.fetchWeather();
    }

    fetchWeather() {
        fetch(BASE_URL + this.city + '&appid=' + API_KEY + '&units=metric')
            .then(response => response.json())
            .then(response => {
                this.temp = response.main.temp;
                this.weather = response.weather[0];
                this.imgUrl = 'http://openweathermap.org/img/wn/' + this.weather.icon + '@2x.png';
                this.description = this.weather.description;
                this.isLoading = false;
            })
            .catch(error => console.error(error))
    }
}