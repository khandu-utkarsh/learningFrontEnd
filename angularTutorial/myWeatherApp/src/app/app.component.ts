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
  //!Let's inject that service directly in this root component.
}