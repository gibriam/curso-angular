import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './exponential.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/products/product/product.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BannerComponent } from './components/common/banner/banner.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
