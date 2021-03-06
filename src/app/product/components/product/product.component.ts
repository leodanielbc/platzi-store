import {
        Component,
        Input,
        Output,
        EventEmitter,
        OnChanges,
        SimpleChanges,
        OnInit,
        DoCheck
    } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    @Input() product: Product; // Este componente va a recibir una propiedad desde otro componente.
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('3. ngOnInit'); // como buena practica se utiliza para hacer llamadas de servicios de datos
    }

    // ngDoCheck() {
    //     console.log('4. ngDoCheck'); // ejecuta el cambio o deteccion de forma forzada
    // }

    OnDestroy() {
        console.log('5. ngOnDestroy'); // este metodo se utiliza para destruir elementos(borrar datos de memoria)
    }

    addCart() {
        console.log('añadir al carrito');
        // this.productClicked.emit(this.product.id); // se lanza el evento
        this.cartService.addCart(this.product)
    }
}
