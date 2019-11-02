import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]); // el carrito inicia en 0 productos

  cart$ = this.cart.asObservable(); // variable publica que puede ser accedidad por cualquier componente y que sea de tipo observable para que suscriban y notar los cambios en tiempo real

  constructor() { }

  addCart(product: Product){
    this.products = [...this.products, product]; // Cada vez se crea una nueva referencia del arreglo, con esto se crea un nuevo estado del arreglo
    this.cart.next(this.products); // comunica a todos los componentes q esten suscritos, que hubo un cambio q halgo se agrego al carrito
  }
}
