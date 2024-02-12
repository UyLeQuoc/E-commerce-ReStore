import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'test',
      component: TestComponent
    }]
  },
];
