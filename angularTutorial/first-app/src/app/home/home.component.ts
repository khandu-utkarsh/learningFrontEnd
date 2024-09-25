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
  <input type="text" placeholder="Filter by city" #filter />
  <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
  </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [ ]; //!Do I need to define it, or can it be like javascript and declared on the go?
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      //console.log('Hit this and should not have')
      return;
    }
    //console.log(`Input text sent to us: ${text}`);    
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),

    );
  }
}