import { Component } from '@angular/core';
import { Weather } from '../services/interfaces';
import { WeatherService } from './../services/weather';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  providers: [WeatherService],
  styleUrls: []
})
export class WeatherWrapper {
  weatherObject?: Weather;
  test: string = "lrwa"

  constructor(
    private weatherService: WeatherService
  ){}

  ngOnInit() {
    console.log("GO")
    this.weatherObject = this.weatherService.loadWeatherData();
    console.log(this.weatherObject, "OBJ")
  }
};
