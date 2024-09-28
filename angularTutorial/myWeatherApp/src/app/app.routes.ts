import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

export const routes: Routes = [
        {
          path: 'wc',
          component: WeatherDetailsComponent,
        }
];


//#Rendering not happening but router is changing.