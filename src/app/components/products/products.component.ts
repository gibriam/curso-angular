import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../core/services/products/products.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: ProductModel[];

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  title = 'plazi-store';
  power = 10;  

  addProduct(id:string) {
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe( products => {
      console.log(products);
      this.products = products;
    })
  }

}
