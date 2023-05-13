import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weather: any;
  toastr: boolean = false;

  constructor( private weatherService: WeatherService) {

  }

  ngOnInit() {

  }

  getWeather( city: string, country: string ) {
    this.weatherService.getWeather(city, country)
      .subscribe(
        res => this.weather = res,
        err => console.log(err)
      )
  }

  submitLocation(city: HTMLInputElement, country: HTMLInputElement ) {
    
    if (city.value && country.value) {

      this.getWeather(city.value, country.value);

      city.value = '';
      country.value = '';

    } else {

      this.toastr = true;
      setTimeout(() => {
        this.toastr = false;
      }, 2000);

    }

    city.focus();

    return false;

  }

}