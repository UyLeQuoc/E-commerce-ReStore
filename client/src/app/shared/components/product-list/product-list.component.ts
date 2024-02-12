import { Component } from '@angular/core';
import { Product } from '../../../types/product/product';
import { ProductService } from '../../../apis/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products?: Product[];
  currentProduct: Product | {} = {};
  currentIndex = -1;
  title = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.retrieveproducts();
  }

  retrieveproducts(): void {
    this.productService.getAll()
      .subscribe({
        next: (data) => {
          this.products = data;
          // this.products = [{

          // }]
          console.log(data, "1");
        },
        error: (e) => console.error(e)
      });
  }

  // refreshList(): void {
  //   this.retrieveproducts();
  //   this.currentProduct = {};
  //   this.currentIndex = -1;
  // }

  // setActiveproduct(product: Product, index: number): void {
  //   this.currentProduct = product;
  //   this.currentIndex = index;
  // }

  // removeAllproducts(): void {
  //   this.productService.deleteAll()
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.refreshList();
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // searchTitle(): void {
  //   this.currentProduct = {};
  //   this.currentIndex = -1;

  //   this.productService.findByTitle(this.title)
  //     .subscribe({
  //       next: (data) => {
  //         this.products = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
}
