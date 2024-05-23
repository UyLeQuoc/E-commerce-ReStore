import { Routes } from '@angular/router';
import { HomeComponent } from './pages/website/home/home.component';

export const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: HomeComponent
    },]
  },
];
