import { Component } from '@angular/core';
import { Product } from '../../../types/product/product';
import { ProductService } from '../../../services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailsComponent, ToastModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [MessageService]
})
export class ProductListComponent {
  products?: Product[];
  currentProduct: Product | {} = {};
  currentIndex = -1;
  title = '';

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.retrieveproducts();
  }

  retrieveproducts(): void {
    this.productService.getAll()
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (e) => {
          console.error(e)
          this.messageService.add({ severity: 'error', summary: 'Fetch Product List Error', detail: 'Forget to turn API or server is down!' });
        }
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
