import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product/product';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ButtonModule, RouterLink, LoadingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null
}
