import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  x =<object> []
  get_weather(city){

     this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e0891b6be00f418dd2785f1e5760d890&units=imperial'
  ).subscribe((data) => {
    this.x[0] = data
});
return this.x
    }

  constructor(private http: HttpClient) { }
}
