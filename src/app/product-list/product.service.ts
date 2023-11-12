// product.service.ts
import { Injectable } from '@angular/core';

// Définition d'un type pour les produits
export interface Product {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1 🐱‍👤',
      description: 'Description for Product 1',
    },
    { id: 2, name: 'Product 2 👕', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3 🎁', description: 'Description for Product 3' },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number | string | null): Product | undefined {
    return this.products.find((product) => product.id == id);
  }
}
