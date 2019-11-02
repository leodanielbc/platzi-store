import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      const id = params.id;
      this.fetchProduct(id);
    });
  }
  fetchProduct(id: string){
    this.productService.getProduct(id).subscribe(product=>{
      this.product = product;
    });
  }
  createProduct(){
    const newProduct: Product = {
      id: '22',
      title: 'new Object from Angular',
      image: 'assets/images/coladaMoradaBig2.jpg',
      price: 1,
      description: 'nuevo producto'
    }
    this.productService.createProduct(newProduct).subscribe(product=>{
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 2,
      description: 'Edición de producto'
    }
    this.productService.updateProduct('22', updateProduct).subscribe(product=>{
      console.log(product);
    });
  }

  deleteProduct(){
    this.productService.deleteProduct('22').subscribe(rta=>{
      console.log(rta);
    });
  }

}
