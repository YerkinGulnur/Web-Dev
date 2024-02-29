// products.component.ts
import { Component } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    // Define your products here
  ];

  constructor() {
    // Initialize products array with data
  }

  shareProduct(whatsappLink: string) {
    window.open(whatsappLink, '_blank');
  }
}
