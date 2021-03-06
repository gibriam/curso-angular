import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {NavComponent} from './components/nav/nav.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TableComponent} from './components/table/table.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {FormProductComponent} from './components/form-product/form-product.component';
import {LoginComponent} from './components/login/login.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'create',
        component:ProductFormComponent,
      },
      {
        path:'table',
        component:TableComponent
      },
      {
        path:'products',
        component:ProductsListComponent
      },
      {
        path:'products/create',
        component:FormProductComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:AddUserComponent
      },
      {
        path:'products/edit/:id',
        component:ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
