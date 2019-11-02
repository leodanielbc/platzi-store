import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/coladaMoradaBig2.jpg',
  //     title: 'Colada Morada',
  //     price: 2.50,
  //     description: 'Vaso grande'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/coladaMoradaSmall.jpg',
  //     title: 'Colada Morada',
  //     price: 1.00,
  //     description: 'Vaso pequeño'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/empanadas.jpg',
  //     title: 'Empanadas',
  //     price: 0.25,
  //     description: 'Empanadas de queso'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/emborrajados.jpg',
  //     title: 'Emborrajados',
  //     price: 0.25,
  //     description: 'Emborrajados: Crema de leche con platano'
  //   }
  // ];

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
  createProduct(product: Product){
    return this.http.post(`${environment.url_api}/products`, product);
  }
  updateProduct(id: string, changes: Partial<Product>){ // la funcion Partial solo enviaria la parte que se desea cambiar
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }
  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
