import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../core/services/products/products.service';
import {ProductModel} from '../../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:ProductModel[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(id:string) {
    this.productsService.deleteProduct(id).subscribe(response => {
      if(response) {
        this.getProducts();
      }
    })
  }

}
