import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenmeteoWeatherServiceService } from './openmeteo-weather-service.service';
import { FormsModule } from '@angular/forms';

//!Let's put everything in the root and create a button.


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
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

    if (this.latitude && this.longitude) {

      //!This got called.
      this.ws.getWeatherInfoForParams(params); //!It is printing on the console inside it.
      console.log('Coordinates:', {        latitude: this.latitude,        longitude: this.longitude});

      //!Also, if ut is successful, it is better to create a new page with the ids and display it there:
      

    }
    else {
      console.error('Please provide both latitude and longitude.');
    }
  }


  //!Let's inject that service directly in this root component.
}