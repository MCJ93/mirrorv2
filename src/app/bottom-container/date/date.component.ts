import { Component } from '@angular/core';
import { WEEKDAYS } from 'src/app/constants/date';

@Component({
  selector: 'full-date',
  templateUrl: './date.component.html',
  styleUrls: []
})
export class FullDate {
  dateToDisplay: string = '';

  constructor() {
    setInterval(() => {
      const date = new Date();
      this.dateToDisplay = `
        ${WEEKDAYS[date.getDay()]} ${this.formatDate(date.getUTCDate())}.${this.formatDate(date.getUTCMonth())}.${this.formatDate(date.getUTCFullYear())}
      `
      date.getUTCDay()
    }, 1000);
  }

  formatDate(date: number) {
    if (date < 10) {
      return `0${date}`;
    }
    return date;
  }
};
