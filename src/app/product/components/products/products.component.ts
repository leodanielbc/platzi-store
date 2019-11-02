import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsServices: ProductsService
  ) {}

  ngOnInit() {
    this.fecthProducts();
  }

  // ejemplo del Output
  clickProduct(id: number) {
    console.log('product: ' + id);
  }

  fecthProducts(){
    this.productsServices.getAllProducts().subscribe(products=>{
      console.log(products);
      this.products = products;
    })
  }

}
