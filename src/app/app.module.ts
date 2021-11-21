import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BottomContainer } from './bottom-container/bottom-container.component';
import { Time } from './bottom-container/time/time.component';
import { FullDate } from './bottom-container/date/date.component';
import { CurrentWeather } from './bottom-container/current-weather/current-weather.component';

//TODO: Split into more modules?
@NgModule({
  declarations: [
    AppComponent,
    BottomContainer,
    Time,
    FullDate,
    CurrentWeather
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
