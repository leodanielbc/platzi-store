import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/coladaMoradaBig2.jpg',
      title: 'Colada Morada',
      price: 2.50,
      description: 'Vaso grande'
    },
    {
      id: '2',
      image: 'assets/images/coladaMoradaSmall.jpg',
      title: 'Colada Morada',
      price: 1.00,
      description: 'Vaso pequeño'
    },
    {
      id: '3',
      image: 'assets/images/empanadas.jpg',
      title: 'Empanadas',
      price: 0.25,
      description: 'Empanadas de queso'
    },
    {
      id: '4',
      image: 'assets/images/emborrajados.jpg',
      title: 'Emborrajados',
      price: 0.25,
      description: 'Emborrajados: Crema de leche con platano'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
