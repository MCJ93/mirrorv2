import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherMock } from './weatherMock';
import { Weather } from './interfaces';

const API_KEY = 'ad2fa9d2857e20a17e0d2b6363e6dab7';
const CITY_LAT = '50.348';
const CITY_LON = '18.9328';
const EXCLUDE_PARAMS = 'minutely,alerts';
const LANGUAGE_CODE = 'pl';
const UNITS_TYPE = "metric;"

@Injectable()
export class WeatherService {
  weatherObject?: Weather;
  constructor(private http: HttpClient) {}

  public loadWeatherData() {
    this.weatherObject = weatherMock as any as Weather;
    return this.weatherObject;
    //TODO: Subscribe should be used in component
    // const response = this.http.get(this.getApiCallUrl()).subscribe((weather) => {
    //   this.weatherObject = weather as Weather;
    // });
  }

  private getApiCallUrl() {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${CITY_LAT}&lon=${CITY_LON}&appid=${API_KEY}&units=${UNITS_TYPE}&lang=${LANGUAGE_CODE}&exclude=${EXCLUDE_PARAMS}`;
  }
}
