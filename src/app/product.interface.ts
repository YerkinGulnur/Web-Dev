// product.interface.ts
export interface Product {
    image: string;
    name: string;
    description: string;
    rating: number;
    kaspiLink: string;
    imageGallery?: string[]; // Optional
  }
  