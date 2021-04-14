import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {PageNotFoundComponent} from './components/error/page-not-found/page-not-found.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AdminGuard} from './admin.guard';

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
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'products',
        canActivate:[AdminGuard],
        loadChildren: () => import('./components/products/product.module').then(m => m.ProductModule)
      },
      {
        path:'contact',
        canActivate:[AdminGuard],
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path:'**',
        loadChildren: () => import('./components/error/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
      }
    ]    
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
