import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenmeteoWeatherServiceService } from '../openmeteo-weather-service.service';

//!Using this component as the page which will display the weather information.

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent implements OnInit{

  coords: string = "";
  constructor(private route: ActivatedRoute, private ws: OpenmeteoWeatherServiceService) { }  //!Or I can explicitly inject as well. Both works

  async ngOnInit(): Promise<void> {
    // Get the 'coords' parameter from the route
    this.coords = this.route.snapshot.paramMap.get('coords')!;
    console.log('Logging start...')
    console.log('Coordinates:', this.coords);  // Logs something like "37.7749,-122.4194"

    //!Split the coordinate:
    const [lat, lon] = this.coords.split(',').map(Number);

    let params = {
      "latitude": lat,
      "longitude": lon,
      "hourly": "temperature_2m"
    };

    //!Call the weather service
    let weatherInfo = await this.ws.getWeatherInfoForParams(params); //!It is printing on the console inside it.

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

}