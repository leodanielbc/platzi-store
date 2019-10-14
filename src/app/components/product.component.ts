import {Component} from '@angular/core';

import {Product} from '../product.model';

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html'
})

export class ProductComponent{
    product: Product={
            id:'1',
            image:'assets/images/coladaMoradaBig2.jpg',
            title:'Colada Morada',
            price:2.50,
            description:'Vaso grande'
    };
}