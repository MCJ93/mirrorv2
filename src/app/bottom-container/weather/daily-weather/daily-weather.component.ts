import { Component, Input, SimpleChanges } from '@angular/core';
import { WEEKDAYS } from 'src/app/constants/date';
import { Weather } from '../../services/interfaces';

interface DailyTemp {
  weekday: string;
  temp: number;
}

@Component({
  selector: 'daily-weather',
  templateUrl: './daily-weather.component.html',
})
export class DailyWeather {
  @Input() weatherObject?: Weather;

  dailyWeather: DailyTemp[] = [];

  ngOnChanges(changes: SimpleChanges) {
    //TODO: type changes.weatherObject
    const { currentValue }: { currentValue: Weather} = (changes as any).weatherObject;
    this.weatherObject = currentValue;
    this.setMappedDailyTemperature();
  }

  setMappedDailyTemperature() {
    //TODO: Stuff should be mapped after getting data in Weather
    const nextEightDayWeather = this.weatherObject?.daily.slice(0, 7) || [];
    this.dailyWeather = nextEightDayWeather.reduce((acc, weather) => {
      const weekdayIndex = new Date(weather.dt).getDay();

      acc.push({
        temp: weather.temp.day,
        weekday: WEEKDAYS[weekdayIndex]
      })

      return acc;
    }, [] as DailyTemp[]);

    console.log(this.dailyWeather)
  }
};
