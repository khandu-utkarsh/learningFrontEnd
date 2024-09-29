import { Component, inject } from '@angular/core';
import { OpenmeteoWeatherServiceService } from './../openmeteo-weather-service.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  latitude: string = '';
  longitude: string = '';

  private ws = inject(OpenmeteoWeatherServiceService);
  constructor() {  }


  async submitButtonClicked() {


    let params = {
      "latitude": this.latitude,
      "longitude": this.longitude,
      "hourly": "temperature_2m"
    };

    if (this.latitude && this.longitude) {

      //!This got called.
      let weatherInfo = await this.ws.getWeatherInfoForParams(params); //!It is printing on the console inside it.

      console.log('Coordinates:', {        latitude: this.latitude,        longitude: this.longitude});

      const utcOffsetSeconds = weatherInfo.utcOffsetSeconds();
      console.log(utcOffsetSeconds);
      console.log(weatherInfo.timezone());
      console.log(weatherInfo.timezoneAbbreviation());
      console.log(weatherInfo.latitude());
      console.log(weatherInfo.longitude());
      const hourly =  weatherInfo.hourly();
      console.log(hourly);

      // Helper function to form time ranges
      const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);      

    //!Let's keep this and create a routing page for the same.


    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {

      hourly: {
        time: range(Number(hourly?.time()), Number(hourly?.timeEnd()), hourly?.interval() ?? 0).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m: hourly?.variables(0)!.valuesArray()!,
      },

    };

    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      console.log(
        weatherData.hourly.time[i].toISOString(),
        weatherData.hourly.temperature2m[i]
      );
    }


    }
    else {
      console.error('Please provide both latitude and longitude.');
    }
  }
}