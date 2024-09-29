import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenmeteoWeatherServiceService } from '../openmeteo-weather-service.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

//!Using this component as the page which will display the weather information.

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [NgFor,  CommonModule],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent implements OnInit{

  coords: string = "";
  weatherData: any;
  returnedLatitude : Number = 0.;
  returnedLongitude : Number= 0.;
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
      "daily": ["temperature_2m_max", "temperature_2m_min",]
    };

    //!Call the weather service
    let weatherInfo = await this.ws.getWeatherInfoForParams(params); //!It is printing on the console inside it.

    //!Let' extract the Daily temperature and show them on screen.
    const utcOffsetSeconds = weatherInfo.utcOffsetSeconds();
    this.returnedLatitude = weatherInfo.latitude();
    this.returnedLongitude = weatherInfo.longitude();

    const daily =  weatherInfo.daily();

    console.log('Debugging start....');
    console.log(daily?.time());
    console.log(daily?.timeEnd());
    console.log(daily?.interval());


    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);      


    // Note: The order of weather variables in the URL query and the indices below need to match!
    this.weatherData = {

      daily: {
        time: range(Number(daily?.time()), Number(daily?.timeEnd()), daily?.interval() ?? 0).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m_max: daily?.variables(0)!.valuesArray()!,
        temperature2m_min: daily?.variables(1)!.valuesArray()!,
      },
    };
      //!Print this as table on webpage. Three column, with furst one being the time stamp, second one max temp (in C) and third one as minTemp in C.

    // // `weatherData` now contains a simple structure with arrays for datetime and weather data
    // for (let i = 0; i < weatherData.hourly.time.length; i++) {
    //   console.log(
    //     weatherData.hourly.time[i].toISOString(),
    //     weatherData.hourly.temperature2m[i]
    //   );
    // }
  }

}