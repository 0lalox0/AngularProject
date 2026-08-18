import { Routes } from '@angular/router';
import { Home } from './home/home';
import { HouseDetails } from './house-details/house-details';
export const routes: Routes = [
    {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: HouseDetails,
    title: 'Home details',
  },
];
