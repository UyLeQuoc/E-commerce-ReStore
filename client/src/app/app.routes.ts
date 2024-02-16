import { Routes } from '@angular/router';
import { HomeComponent } from './pages/website/home/home.component';
import { ProductsComponent } from './pages/website/products/products.component';
import { TestComponent } from './pages/website/test/test.component';
import { ProductDetailsPageComponent } from './pages/website/product-details-page/product-details-page.component';

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
      path: 'products/:slug',
      component: ProductDetailsPageComponent
    },
    {
      path: 'test',
      component: TestComponent
    }]
  },
];
