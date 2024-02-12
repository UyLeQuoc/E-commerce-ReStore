import { Component } from '@angular/core';
import { ProductListComponent } from '../../shared/components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
