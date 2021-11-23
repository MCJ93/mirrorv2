import { Component, Input, SimpleChanges } from '@angular/core';
import { Weather } from '../../services/interfaces';
import { WeatherService } from '../../services/weather';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
})
export class CurrentWeather {
  @Input() weatherObject?: Weather;

  currentTemperature: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    //TODO: type changes.weatherObject
    const { currentValue }: { currentValue: Weather} = (changes as any).weatherObject;
    this.currentTemperature = currentValue.current.temp;
}
};
