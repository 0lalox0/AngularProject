import { Service } from '@angular/core';
import { HouseInfo } from './house';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client';

@Service()
export class HouseService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  protected readonly url = 'http://localhost:3000/locations';

  async getAllHouses(): Promise<HouseInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? []; 
  }
  async getHouseById(id: number): Promise<HouseInfo | undefined> {
        const data = await fetch(`${this.url}/${id}`);
    const locationJson = await data.json();
    return locationJson ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
