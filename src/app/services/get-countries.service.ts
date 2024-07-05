import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  constructor(private http: HttpClient) { }

  getCountries(showCountries: (listOfCountries: { name: string, iso2: string }[]) => void) {
    this.http.get<{
      name: string,
      iso2: string
    }[]>('https://api.countrystatecity.in/v1/countries', {
      headers: new HttpHeaders({
        'X-CSCAPI-KEY': 'NVZKUmJMMlJUaUVLSXNzdmxKT05FMEY5UWRRWk1mT1BXTmhmaG80Yg=='
      })
    }).subscribe((result) => {
      showCountries(result);
    })
  }

  getStates(countryCode: string, showStates: (listOfStates: { name: string, iso2: string }[]) => void) {
    this.http.get<{
      name: string,
      iso2: string
    }[]>(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
      headers: new HttpHeaders({
        'X-CSCAPI-KEY': 'NVZKUmJMMlJUaUVLSXNzdmxKT05FMEY5UWRRWk1mT1BXTmhmaG80Yg=='
      })
    })
      .subscribe((result) => {
        showStates(result);
      });
  }

  getCities(countryCode:string, stateCode: string, showCities: (listOfStates: { name: string, iso2: string }[]) => void){
    this.http.get<{
      name: string,
      iso2: string
    }[]>(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, {
      headers: new HttpHeaders({
        'X-CSCAPI-KEY': 'NVZKUmJMMlJUaUVLSXNzdmxKT05FMEY5UWRRWk1mT1BXTmhmaG80Yg=='
      })
    })
      .subscribe((result) => {
        showCities(result);
      });
  }
}
