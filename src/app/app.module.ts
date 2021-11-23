import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BottomContainer } from './bottom-container/bottom-container.component';
import { Time } from './bottom-container/time/time.component';
import { FullDate } from './bottom-container/date/date.component';
import { WeatherWrapper } from './bottom-container/weather/weather.component';
import { CurrentWeather } from './bottom-container/weather/current-weather/current-weather.component';
import { HourlyWeather } from './bottom-container/weather/hourly-weather/hourly-weather.component';
import { DailyWeather } from './bottom-container/weather/daily-weather/daily-weather.component';

//TODO: Split into more modules?
@NgModule({
  declarations: [
    AppComponent,
    BottomContainer,
    Time,
    FullDate,
    WeatherWrapper,
    CurrentWeather,
    HourlyWeather,
    DailyWeather
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
