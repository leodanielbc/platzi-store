import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  tableDS: MatTableDataSource<Product>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.tableDS = new MatTableDataSource(products);
      this.products = products;
    });
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(rta => {
      console.log(rta);
      this.products.forEach((elemento, indice) => {
        if(elemento.id === id){
          this.products.splice(indice, 1);
        }
      });
      this.tableDS = new MatTableDataSource(this.products);
      console.log(this.products);
    });
  }
}
