import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../../core/services/products/products.service';
import {ProductModel} from './../../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:ProductModel;

  constructor(private route:ActivatedRoute,
              public productsService:ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe( (params:Params) => {
      const id = params.id;      
      this.fetchProduct(id);
    });
  }

  fetchProduct(id:string) {

    this.productsService.getProduct(id).subscribe( product => {
      this.product = product;
      console.log(this.product);
    });

  }

  createProduct() {

    const newProduct:ProductModel={
      id:'10',
      title:'Nuevo Producto',
      image: 'assets/images/camiseta.png',
      price:800,
      description: 'Nuevo producto de prueba'

    };

    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const editProduct:Partial<ProductModel>={
      image: 'assets/images/camiseta.png'   
    };

    this.productsService.updateProduct(this.product.id,editProduct).subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct(){
    this.productsService.deleteProduct(this.product.id).subscribe(resp => {
      console.log(resp);
    });
  }

}
