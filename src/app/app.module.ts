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
import { SpotifyPlayer } from './bottom-container/spotify/spotify.component';
import { YoutubePlayer } from './bottom-container/youtube/youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

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
    DailyWeather,
    SpotifyPlayer,
    YoutubePlayer
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
