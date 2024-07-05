import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Gregorian, Hijri, PrayerTime, Timings } from '../model/PrayerTime';

@Injectable({
  providedIn: 'root'
})
export class CalendarByCityService{

  constructor(
    private http: HttpClient
  ) { }

  timings = new EventEmitter<Timings>();
  hijri = new EventEmitter<Hijri>();
  gregorian = new EventEmitter<Gregorian>();

  getPrayingTimesByCity(city: string, country: string, whenFind: (num: number) => void) {
    this.http
    .get<{data:PrayerTime}>(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`)
    .subscribe((result) => {
      this.timings.emit(result.data.timings);
      this.hijri.emit(result.data.date.hijri);
      this.gregorian.emit(result.data.date.gregorian);
    });
    

  }
}
