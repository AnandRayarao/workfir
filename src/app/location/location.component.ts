import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  weather : any
  weatherSearchForm = this.formBuilder.group({
    location: ['']
  });

  constructor(private formBuilder: FormBuilder, private weatherservice : WeatherService) { }

  ngOnInit(): void {
    
  }

  send(formValues) {
    debugger;
    this.weather= this.weatherservice.get_weather(formValues.location)
    console.log(this.weather)
 }

}
