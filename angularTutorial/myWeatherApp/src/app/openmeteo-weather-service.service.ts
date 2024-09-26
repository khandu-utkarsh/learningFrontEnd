import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';

//!I want to create a service which which fetch weather data from the openmeteo

//!This is temporary:

// const params = {
// 	"latitude": 52.52,
// 	"longitude": 13.41,
// 	"hourly": "temperature_2m"
// };


//!Add the mechanism to get geo coordinates from the city, etc.

@Injectable({
  providedIn: 'root'
})
export class OpenmeteoWeatherServiceService {

  readonly url = "https://api.open-meteo.com/v1/forecast";

  constructor() {   }

  async getWeatherInfoForParams(params: any) {
    const responses = await fetchWeatherApi(this.url, params);
    console.log(`Fetched response, element 0: ${responses[0]}`);
    console.log(responses[0]);
    return responses[0];  //!Since fetching for only one location, we can choose the first one by default.
  }



}


//!Below is the way to parse the output. But let's see if this is working or not.

// // Helper function to form time ranges
// const range = (start: number, stop: number, step: number) =>
// 	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// // Process first location. Add a for-loop for multiple locations or weather models
// const response = responses[0];

// // Attributes for timezone and location
// const utcOffsetSeconds = response.utcOffsetSeconds();
// const timezone = response.timezone();
// const timezoneAbbreviation = response.timezoneAbbreviation();
// const latitude = response.latitude();
// const longitude = response.longitude();

// const hourly = response.hourly()!;

// // Note: The order of weather variables in the URL query and the indices below need to match!
// const weatherData = {

// 	hourly: {
// 		time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
// 			(t) => new Date((t + utcOffsetSeconds) * 1000)
// 		),
// 		temperature2m: hourly.variables(0)!.valuesArray()!,
// 	},

// };

// // `weatherData` now contains a simple structure with arrays for datetime and weather data
// for (let i = 0; i < weatherData.hourly.time.length; i++) {
// 	console.log(
// 		weatherData.hourly.time[i].toISOString(),
// 		weatherData.hourly.temperature2m[i]
// 	);
// }
