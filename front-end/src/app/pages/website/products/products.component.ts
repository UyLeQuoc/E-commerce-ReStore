import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../../shared/components/product-list/product-list.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent, BreadcrumbComponent, ToastModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService]
})
export class ProductsComponent{

  

}
