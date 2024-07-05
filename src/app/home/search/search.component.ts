import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarByCityService } from '../../services/calendar-by-city.service';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators, isFormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetCountriesService } from '../../services/get-countries.service';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  countries: { name: string; iso2: string }[] = [];
  states: { name: string; iso2: string }[] = [];
  cities:  { name: string; iso2: string }[] = [];

  @Output() ctrl = new EventEmitter();

  country: string = '';
  state: string = '';
  city: string = '';



  constructor(private calendarByCityService: CalendarByCityService, private countriesService: GetCountriesService) {
    this.countriesService.getCountries((listOfCountries) => {
      this.countries = listOfCountries;
    });
  }
  ngOnInit(): void {
    this.calendarByCityService
      .getPrayingTimesByCity(
        'tetou',
        '',
        (num) => {
          this.searchFormGroup.controls.city.setValue(`${num}`);
        });
  }

  searchFormGroup = new FormGroup({
    city: new FormControl('', [Validators.nullValidator]),
    country: new FormControl('', [Validators.nullValidator])
  });

  getCalendarByCity() {

    this.calendarByCityService
      .getPrayingTimesByCity(
        this.searchFormGroup.value.city!,
        this.searchFormGroup.value.country!,
        (num) => {
          this.searchFormGroup.controls.city.setValue(`${num}`);
        });

  }


  getStates() {
    let foundItem = this.countries.find((element) => element.name === this.country);
    this.countriesService.getStates(foundItem!.iso2, (listOfStates) => {
      this.states = listOfStates;
    });
  }

  getCities(){
    let foundCountryItem = this.countries.find((element) => element.name === this.country);
    let foundStateItem = this.states.find((element) => element.name === this.state);
    this.countriesService.getCities(foundCountryItem!.iso2, foundStateItem!.iso2, (listOfCities) => {
      this.cities = listOfCities;
    });

  }


  onCityChoosed(){
    this.calendarByCityService.getPrayingTimesByCity(this.city, this.country, (n) => {

    });
  }

}
