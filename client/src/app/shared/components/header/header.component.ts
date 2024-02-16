import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MenubarModule, InputTextModule, BreadcrumbComponent, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
          {
            label: 'Home',
            routerLink: "/",
            icon: 'pi pi-home',
          },
          {
              label: 'Products',
              routerLink: "/products",
              icon: 'pi pi-shopping-bag',
          },
          {
            label: 'Test',
            routerLink: "/test",
            icon: 'pi pi-pencil',
        },
        ];
    }
}
