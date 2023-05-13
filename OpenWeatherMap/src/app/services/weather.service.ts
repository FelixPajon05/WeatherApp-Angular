import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'a2de5949be6cbb236e2e673aa1785345';

  URI: string = '';

  constructor(private http: HttpClient) {

    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`

  }

  getWeather(city: string, country: string) {
    return this.http.get(`${this.URI}${city},${country}`);
  }
}
