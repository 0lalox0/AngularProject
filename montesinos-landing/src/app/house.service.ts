import { Injectable, inject } from '@angular/core';
import { HouseInfo } from './house';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client';

const getHouses = gql`
  query GetHouses {
    getHouses {
      id
      name
      city
      state
      photo
      availableUnits
      wifi
      laundry
    }
  }
`;
const getHouseById = gql`
  query GetHouseById($id: ID!) {
    getHouseById(id: $id) {
      id
      name
      city
      state
      photo
      availableUnits
      wifi
      laundry
    }
  }
`;

@Injectable({ providedIn: 'root' })
export class HouseService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  protected readonly url = 'http://localhost:3000/locations';

  constructor(private apollo: Apollo) {}

  async getAllHouses(): Promise<HouseInfo[]> {
    const response = await this.apollo
      .query<{ getHouses: HouseInfo[] }>({
        query: getHouses,
      })
      .toPromise();

    return response?.data?.getHouses ?? [];
  }

async getHouseById(id: number): Promise<HouseInfo | undefined> {
  const response = await this.apollo
    .query<{ getHouseById: HouseInfo | null }>({
      query: getHouseById,
      variables: { id },
    })
    .toPromise();

  return response?.data?.getHouseById ?? undefined;
}

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
