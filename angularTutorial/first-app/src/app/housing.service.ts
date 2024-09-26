import {Injectable} from '@angular/core';
import {HousingLocation} from './housing-location';



@Injectable({
  providedIn: 'root', //!It tells the Angular that the injectable will be available globally that is too the root component.
})
export class HousingService {

  url = 'http://localhost:3000/locations';    //!Endpoint to the backend API.
  async getAllHousingLocations(): Promise<HousingLocation[]> { //!This function is returning a promise which will be resolved to HousingLocation List
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> { //!This function is returing a promise which will be either resolved to Housing Location or to nothing.
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}