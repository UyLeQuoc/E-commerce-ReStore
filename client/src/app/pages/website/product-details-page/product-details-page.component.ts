import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../types/product/product';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [ButtonModule, ToastModule, BreadcrumbComponent],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css',
  providers: [MessageService, BreadcrumbComponent]
})
export class ProductDetailsPageComponent implements OnInit{
  product?: Product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let slug = params.get('slug'); 
      this.retrieveProductDetail(slug != null ? +slug : -1);
    });
  }

  retrieveProductDetail(id: number){
    if(id != -1){
      this.productService.get(id).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (e) => {
          this.messageService.add({ severity: 'error', summary: 'Fetch Product Details Error', detail: 'Wrong id or product is not exist!' });
        }})
    }
  }
}
