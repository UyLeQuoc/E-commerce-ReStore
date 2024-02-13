import { Component } from '@angular/core';
import { Product } from '../../../types/product/product';
import { ProductService } from '../../../apis/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailsComponent],
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
        },
        error: (e) => {
          console.error(e)
          this.products = [{
            id: 1,
            name: "Angular Speedster Board 2000",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
            price: 20000,
            pictureUrl: "/images/products/sb-ang1.png",
            brand: "Angular",
            type: "Boards",
            quantityInStock: 100
          },
          {
            id: 2,
            name: "Angular Speedster Board 2000",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
            price: 20000,
            pictureUrl: "/images/products/sb-ang1.png",
            brand: "Angular",
            type: "Boards",
            quantityInStock: 100
          },
          {
            id: 3,
            name: "Angular Speedster Board 2000",
            description:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
            price: 20000,
            pictureUrl: "/images/products/sb-ang1.png",
            brand: "Angular",
            type: "Boards",
            quantityInStock: 100
          }]
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
