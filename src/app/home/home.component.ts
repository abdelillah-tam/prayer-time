import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { CalendarByCityService } from '../services/calendar-by-city.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, ResultComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(){
    
  }
}
