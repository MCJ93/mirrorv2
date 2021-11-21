import { Component } from '@angular/core';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: []
})
export class Time {
  timeToDisplay: string = '';

  constructor() {
    setInterval(() => {
      const date = new Date();

      this.timeToDisplay = `${this.formatTime(date.getHours())}:${this.formatTime(date.getMinutes())}:${this.formatTime(date.getSeconds())}`
    }, 1000);
  }

  formatTime(time: number) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }
};
