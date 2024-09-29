import { Component, inject } from '@angular/core';
import { OpenmeteoWeatherServiceService } from './../openmeteo-weather-service.service'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

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
  constructor(private router: Router) {  }


  async submitButtonClicked() {

    if (this.latitude && this.longitude) {
      //!We are directly validating in input, hence no need here:
      this.router.navigate(['/weatherDetails', `${this.latitude},${this.longitude}`]);
    }
  }
}