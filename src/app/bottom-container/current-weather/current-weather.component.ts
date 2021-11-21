import { Component } from '@angular/core';
import { Weather } from '../services/interfaces';
import { WeatherService } from './../services/weather';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  providers: [WeatherService],
  styleUrls: []
})
export class CurrentWeather {
  currentTemperature: number = 0;
  weatherObject: Weather;

  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherObject = this.weatherService.loadWeatherData();
    this.setCurrentTemperature(this.weatherObject);
  }

  setCurrentTemperature(weatherObject: Weather) {
    this.currentTemperature = weatherObject.current.temp;
  }

};
