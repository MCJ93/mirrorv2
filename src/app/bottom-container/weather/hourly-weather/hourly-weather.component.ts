import { Component, Input, SimpleChanges } from '@angular/core';
import { Weather } from '../../services/interfaces';

interface HourlyTemp {
  temp: number;
  hour: number;
}

@Component({
  selector: 'hourly-weather',
  templateUrl: './hourly-weather.component.html',
})
export class HourlyWeather {
  @Input() weatherObject?: Weather;

  hourlyWeather: HourlyTemp[] = [];

  ngOnChanges(changes: SimpleChanges) {
    //TODO: type changes.weatherObject
    const { currentValue }: { currentValue: Weather} = (changes as any).weatherObject;
    this.weatherObject = currentValue;
    console.log(new Date(currentValue.current.dt))
    this.setMappedHourlyTemperature();
  }

  setMappedHourlyTemperature() {
    //TODO: Stuff should be mapped after getting data in Weather
    const nextEightHourWeather = this.weatherObject?.hourly.slice(0, 7) || [];
    this.hourlyWeather = nextEightHourWeather.reduce((acc, weather) => {

      acc.push({
        temp: weather.temp,
        hour: new Date(weather.dt).getHours()
      })

      return acc;
    }, [] as HourlyTemp[]);
  }
};
