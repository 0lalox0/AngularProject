import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HouseService } from '../house.service';
import { HouseInfo } from '../house';
import { HouseCard } from '../house-card/house-card';

@Component({
  selector: 'app-home',
  imports: [HouseCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  houseList: HouseInfo[] = [];
  housingService: HouseService = inject(HouseService);
  filteredHouseList: HouseInfo[] = [];
  constructor() {
    this.housingService
      .getAllHouses()
      .then((housingLocationList: HouseInfo[]) => {
        this.houseList = housingLocationList;
        this.filteredHouseList = housingLocationList;
        this.changeDetectorRef.markForCheck();
      })
      .catch(() => {
        this.houseList = [];
        this.filteredHouseList = [];
        this.changeDetectorRef.markForCheck();
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredHouseList = this.houseList;
      return;
    }
    this.filteredHouseList = this.houseList.filter((house) =>
      house?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
