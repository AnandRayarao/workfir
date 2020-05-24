import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { LocationComponent } from './location/location.component';
import { ResponseTimeComponent } from './response-time/response-time.component';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    ResponseTimeComponent,
    MaleComponent,
    FemaleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgXNa5EYJKx94oAKivU5YTsQvaIbTV6t8',
      libraries: ['places']
    })
  ],
  providers: [WeatherService,],
  bootstrap: [AppComponent],

})
export class AppModule {

 
 }
