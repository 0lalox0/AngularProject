import { Component, inject, ChangeDetectorRef} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../house.service';
import { HouseInfo } from '../house';
@Component({
  selector: 'app-house-details',
  imports: [ReactiveFormsModule],
  templateUrl: './house-details.html',
  styleUrl: './house-details.css',
})
export class HouseDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  houseService = inject(HouseService);
  house: HouseInfo | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    const houseId = Number(this.route.snapshot.params['id']);
    this.houseService.getHouseById(houseId).then((house) => {
      this.house = house;
      this.changeDetectorRef.markForCheck();
    });
  }
  submitApplication() {
    this.houseService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
