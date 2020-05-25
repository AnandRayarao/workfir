import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  title: string = 'AGM project';
  weather : any
  location = "Melbourne"

 
 

  constructor(private weatherservice : WeatherService
   
  ) { }
 
 
  ngOnInit() {
      debugger
      this.weather= this.weatherservice.get_weather(this.location)
   }
  
  }
 
 
 
 
