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

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  title = 'plazi-store';
  power = 10;  

  addProduct(id:string) {
    console.log(id);
  }

}
