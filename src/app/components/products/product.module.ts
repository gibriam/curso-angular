import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ProductsComponent} from './products.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductRoutingModule} from './product-routing.module';
import {SharedModule} from './../../shared/shared.module';
import {MaterialModule} from './../../material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ]
})
export class ProductModule { }
