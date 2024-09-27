import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenmeteoWeatherServiceService } from './openmeteo-weather-service.service';
import { NgModule } from '@angular/core';

//!Let's put everything in the root and create a button.


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myWeatherApp';
  latitude: string = '';
  longitude: string = '';

  private ws = inject(OpenmeteoWeatherServiceService);
  constructor() {

  }


  submitButtonClicked() {


    let params = {
      "latitude": this.latitude,
      "longitude": this.longitude,
      "hourly": "temperature_2m"
    };
  
    console.log(this.latitude);
    console.log(this.longitude);

    if (this.latitude && this.longitude) {

      //!This got called.
      this.ws.getWeatherInfoForParams(params); //!It is printing on the console inside it.
      console.log('Coordinates:', {        latitude: this.latitude,        longitude: this.longitude});
    }
    else {
      console.error('Please provide both latitude and longitude.');
    }
  }


  //!Let's inject that service directly in this root component.
}