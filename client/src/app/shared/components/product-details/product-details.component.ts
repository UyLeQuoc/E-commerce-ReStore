import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product/product';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null
}
