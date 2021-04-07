import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {ContactComponent} from './components/contact/contact.component';
import {PageNotFoundComponent} from './components/error/page-not-found/page-not-found.component';
import {ProductDetailComponent} from './components/products/product-detail/product-detail.component';
import {LayoutComponent} from './components/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path:'products',
        component: ProductsComponent
      },
      {
        path:'products/:id',
        component: ProductDetailComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },
      {
        path:'**',
        component:PageNotFoundComponent
      }
    ]    
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
