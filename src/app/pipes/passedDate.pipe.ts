import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passedTime',
  standalone: true
})
export class PassedTimePipe implements PipeTransform {

  transform(startTime: number, endTime?: number): string {
    const start = new Date(startTime);
    const end = endTime ? new Date(endTime) : new Date();
    const timeDifference = Math.abs(end.getTime() - start.getTime());

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const week = Math.floor(days / 7);
    const month = Math.floor(week / 4);
    const year = Math.floor(month / 12);

    if (year > 0) {
      return year + ' year(s)';
    } else if (month > 0) {
      return month + ' month(s)';
    } else if (week > 0) {
      return week + ' week(s)';
    } else if (days > 0) {
      return days + ' day(s)';
    } else if (hours > 0) {
      return hours + ' hour(s)';
    } else if (minutes > 0) {
      return minutes + ' minute(s)';
    } else {
      return seconds + ' second(s)';
    }
  }
}