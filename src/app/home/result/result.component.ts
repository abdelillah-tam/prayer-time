import { Component } from '@angular/core';
import { CalendarByCityService } from '../../services/calendar-by-city.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  fajr = '';
  zhuhr = '';
  asr = '';
  maghrib = '';
  isha = '';

  hijri = '';
  gregorian = '';

  constructor(private calendarService: CalendarByCityService) {
    
    this.calendarService.timings.subscribe((result) => {
      this.fajr = result.Fajr;
      this.zhuhr = result.Dhuhr;
      this.asr = result.Asr;
      this.maghrib = result.Maghrib;
      this.isha = result.Isha;
    });

    this.calendarService.hijri.subscribe((result) => {
      this.hijri = result.date;
    });

    this.calendarService.gregorian.subscribe((result) => {
      this.gregorian = result.date;
    });
  }


}
