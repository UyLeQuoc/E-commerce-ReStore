import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit{
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  /**
   *
   */
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let slug = params.get('slug');
      this.items = [{ label: 'Products', routerLink: '/products' }, {
        label: slug || undefined,
        routerLink: `products/${slug}`
      }]
    });

      this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
