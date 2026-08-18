import { Component, inject } from '@angular/core';
import { HouseService } from '../house.service';
import { HouseInfo } from '../house';
import { HouseCard } from "../house-card/house-card";

@Component({
  selector: 'app-home',
  imports: [HouseCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  houseList: HouseInfo[] = [];
  housingService: HouseService = inject(HouseService);
  constructor() {
    this.houseList = this.housingService.getAllHouses();
  }
}

