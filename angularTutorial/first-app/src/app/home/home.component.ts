import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import {HousingService} from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
  <form>
  <input type="text" placeholder="Filter by city" />
  <button class="primary" type="button"> Search </button>
  </form>
  </section>
  <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>



  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [ ]; //!Do I need to define it, or can it be like javascript and declared on the go?
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }


}