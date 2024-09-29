import { Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'wc',
        component: WeatherDetailsComponent,
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

//!TODO: Make the details page such that in the url it is -latitude_longitude. So every lati longi pair is different component.