// products.component.ts
import { Component } from '@angular/core';
import { Product } from '../product.interface';

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
    this.initializeProducts();
  }

  initializeProducts() {
    // Populate products array with sample data
    for (let i = 1; i <= 10; i++) {
      this.products.push({
        image: `path/to/product${i}.jpg`,
        name: `Product ${i}`,
        description: `Description of Product ${i}`,
        rating: Math.floor(Math.random() * 5) + 1,
        kaspiLink: `https://kaspi.kz/product${i}`,
        imageGallery: [`path/to/gallery1.jpg`, `path/to/gallery2.jpg`, `path/to/gallery3.jpg`]
      });
    }
  }

  shareProduct(whatsappLink: string) {
    window.open(whatsappLink, '_blank');
  }
}
