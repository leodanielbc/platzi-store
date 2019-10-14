import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Product} from '../product.model';

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html'
})

export class ProductComponent{
    @Input() product: Product; //Este componente va a recibir una propiedad desde otro componente.
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);//se lanza el evento
    }
}