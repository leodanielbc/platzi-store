import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items=['Leo','Daniel','Maria','Cris'];

  products: Product[] = [
    {
      id:'1',
      image:'assets/images/coladaMoradaBig2.jpg',
      title:'Colada Morada',
      price:2.50,
      description:'Vaso grande'
    },
    {
      id:'2',
      image:'assets/images/coladaMoradaSmall.jpg',
      title:'Colada Morada',
      price:1.00,
      description:'Vaso pequeño'
    },
    {
      id:'3',
      image:'assets/images/empanadas.jpg',
      title:'Empanadas',
      price:0.25,
      description:'Empanadas de queso'
    },
    {
      id:'4',
      image:'assets/images/emborrajados.jpg',
      title:'Emborrajados',
      price:0.25,
      description:'Emborrajados: Crema de leche con platano'
    }
  ];

  addItem(){
    this.items.push('Nuevo item');
  }

  deleteItem(index:number){
    this.items.splice(index,1);
  }
  //ejemplo del Output
  clickProduct(id:number){
    console.log('product: '+id)
  }
}
