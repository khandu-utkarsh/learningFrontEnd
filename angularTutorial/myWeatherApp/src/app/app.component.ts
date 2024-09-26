import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenmeteoWeatherServiceService } from './openmeteo-weather-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myWeatherApp';
  params = {
    "latitude": 52.52,
    "longitude": 13.41,
    "hourly": "temperature_2m"
  };

  private ws = inject(OpenmeteoWeatherServiceService);
  constructor() {
    this.ws.getWeatherInfoForParams(this.params);
  }




  //!Let's inject that service directly in this root component.
}
